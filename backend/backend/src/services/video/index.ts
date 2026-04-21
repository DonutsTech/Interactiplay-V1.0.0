import ffmpeg from 'fluent-ffmpeg';
import { StatusCodes } from 'http-status-codes';
import { promisify } from 'util';
import type { MulterS3File } from '../../@types/file';
import type { createVideo, UpdateVideo } from '../../@types/interface/video';
import { deleteFileFromS3 } from '../../config/s3';
import { CustomError } from '../../error';
import { videoModel } from '../../models/video';
import { campaignVideoService } from '../campaignVideo';
import { userService } from '../user';

const ffprobeAsync = promisify(ffmpeg.ffprobe);

class VideoService {
  async createVideoForUser(userId: string, file: MulterS3File) {
    try {
      const metadata = (await ffprobeAsync(file.location)) as ffmpeg.FfprobeData;

      if (!metadata || !metadata.format || !metadata.streams) {
        throw new CustomError('Não foi possível obter a duração do vídeo', StatusCodes.BAD_REQUEST);
      }

      const stream = metadata.streams.find(s => s.codec_type === 'video');

      if (!stream) {
        throw new CustomError(
          'Não foi possível obter as informações do stream de vídeo',
          StatusCodes.BAD_REQUEST,
        );
      }

      const create: createVideo = {
        NAME: file.originalname,
        SIZE: file.size,
        FORMAT: file.mimetype.split('/')[1] || '',
        DURATION: Math.floor(Number(metadata.format.duration)) || 0,
        ORIENTATION:
          stream.width && stream.height
            ? stream.width > stream.height
              ? 'landscape'
              : stream.width < stream.height
                ? 'portrait'
                : 'square'
            : 'landscape',
        HEIGHT: stream.height || 0,
        WIDTH: stream.width || 0,
      };

      /*
      const result = await uploadFileFromS3(file);

      if (result === '') {
        throw new CustomError('Erro ao fazer upload do vídeo', StatusCodes.INTERNAL_SERVER_ERROR);
      }
      */

      const video = await videoModel.create({
        data: {
          ...create,
          URL: file.location,
          USER: {
            connect: {
              ID: userId,
            },
          },
        },
      });

      return video;
    } catch (error) {
      throw error;
    }
  }

  async deleteVideoFile(url: string) {
    try {
      if (!url) {
        throw new CustomError('Nome do arquivo é obrigatório', StatusCodes.BAD_REQUEST);
      }

      await deleteFileFromS3(url);
    } catch (error) {
      throw new CustomError(
        'Erro ao deletar o arquivo de vídeo',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async countVideoForUser(userId: string): Promise<number> {
    return videoModel.count({
      USER_ID: userId,
    });
  }

  async existsById(videoId: string) {
    if (!(await videoModel.count({ ID: videoId }))) {
      throw new CustomError(
        'Video não encontrado, por favor verifique o id do video',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async getVideoAllForUser(userId: string) {
    try {
      await userService.existsById(userId);

      const videos = videoModel.findMany({
        where: {
          USER_ID: userId,
        },
      });

      return videos;
    } catch (error) {
      throw error;
    }
  }

  async getVideoByIdForUser(userId: string, videoId: string) {
    try {
      await this.existsById(videoId);

      const video = videoModel.findBy({
        where: {
          ID: videoId,
          USER_ID: userId,
        },
      });

      return video;
    } catch (error) {
      throw error;
    }
  }

  async getVideoAll() {
    try {
      const videos = videoModel.findMany({});

      return videos;
    } catch (error) {
      throw error;
    }
  }

  async getVideoById(videoId: string) {
    try {
      await this.existsById(videoId);
      const video = videoModel.findBy({
        where: {
          ID: videoId,
        },
      });
      return video;
    } catch (error) {
      throw error;
    }
  }

  async putVideoForUser(id: string, data: UpdateVideo) {
    try {
      await this.existsById(id);

      const video = await videoModel.updateBy({
        where: {
          ID: id,
        },
        data,
      });

      return video;
    } catch (error) {
      throw error;
    }
  }

  async deleteVideoForUser(id: string) {
    try {
      const video = await this.getVideoById(id);

      if (!video) {
        throw new CustomError('Vídeo não encontrado', StatusCodes.NOT_FOUND);
      }

      if (await campaignVideoService.existsByVideoId(id)) {
        throw new CustomError(
          'Não é possível deletar o vídeo, pois ele está associado a uma campanha',
          StatusCodes.BAD_REQUEST,
        );
      }

      await this.deleteVideoFile(video.URL);

      await videoModel.deleteBy({
        ID: id,
      });

      return { MESSAGE: 'Vídeo deletado com sucesso' };
    } catch (error) {
      throw error;
    }
  }
}

export const videoService = new VideoService();

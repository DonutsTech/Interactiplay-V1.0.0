import { StatusCodes } from 'http-status-codes';
import type { createVideo, UpdateVideo } from '../../@types/interface/video';
import { deleteFileFromS3, uploadFileFromS3 } from '../../config/s3';
import { CustomError } from '../../error';
import { videoModel } from '../../models/video';
import { deleteFile } from '../../utils/deleteFile';
import { getMetadata } from '../../utils/format/metadata';
import { campaignVideoService } from '../campaignVideo';
import { userService } from '../user';

class VideoService {
  async createVideoForUser(userId: string, file: Express.Multer.File) {
    try {
      if (!file) {
        throw new CustomError('Arquivo de vídeo é obrigatório', StatusCodes.BAD_REQUEST);
      }

      const [uploadResult, metadata] = await Promise.all([
        uploadFileFromS3(file),
        getMetadata(file.path),
      ]);

      await deleteFile(file.path);

      if (!metadata) {
        throw new CustomError(
          'Não foi possível obter as informações do vídeo',
          StatusCodes.BAD_REQUEST,
        );
      }

      if (uploadResult === '') {
        throw new CustomError('Erro ao fazer upload do vídeo', StatusCodes.INTERNAL_SERVER_ERROR);
      }

      const { duration, height, width } = metadata;

      const create: createVideo = {
        NAME: file.originalname,
        SIZE: file.size,
        FORMAT: file.mimetype.split('/')[1] || '',
        DURATION: duration,
        ORIENTATION:
          width && height
            ? width > height
              ? 'landscape'
              : width < height
                ? 'portrait'
                : 'square'
            : 'landscape',
        HEIGHT: height || 0,
        WIDTH: width || 0,
      };

      const video = await videoModel.create({
        data: {
          ...create,
          URL: uploadResult,
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

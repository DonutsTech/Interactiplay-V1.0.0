import ffmpeg from 'fluent-ffmpeg';
import { CustomError } from '../../error';

interface VideoMetadata {
  duration: number;
  width: number;
  height: number;
}

export function getMetadata(file: string, timeoutMs = 15000): Promise<VideoMetadata> {
  return new Promise((resolve, reject) => {
    if (!file || typeof file !== 'string') {
      return reject(new CustomError('URL do arquivo é obrigatória', 400));
    }

    const timeout = setTimeout(() => {
      reject(new CustomError('Timeout ao obter metadados do vídeo', 500));
    }, timeoutMs);

    const command = ffmpeg().input(file).inputOptions([
      '-analyzeduration',
      '2000000', // 2 segundos para análise
      '-probesize',
      '50000000', // 50MB para probe
    ]);

    command.ffprobe((err, metadata) => {
      clearTimeout(timeout);

      if (err) {
        return reject(new CustomError(`Erro ao obter metadados: ${err.message}`, 500));
      }

      try {
        const videoStream = metadata.streams.find(stream => stream.codec_type === 'video');

        if (!videoStream) {
          return reject(new CustomError('Stream de vídeo não encontrado', 400));
        }

        const result: VideoMetadata = {
          duration: metadata.format.duration || 0,
          width: videoStream.width || 0,
          height: videoStream.height || 0,
        };

        if (result.duration <= 0) {
          return reject(new CustomError('Duração do vídeo inválida', 400));
        }

        resolve(result);
      } catch (parseError) {
        reject(new CustomError('Erro ao processar metadados do vídeo', 500));
      }
    });
  });
}

/*
import { exec } from "child_process";
import { CustomError } from "../../error";

interface VideoMetadata {
  duration: number;
  width: number;
  height: number;
}

export function getMetadata(file: string): Promise<VideoMetadata | undefined> {
  return new Promise((resolve, reject) => {
    exec(
      `ffprobe -v error -select_streams v:0 -show_entries format=duration:stream=width,height -of json "${file}"`,
      (err, stdout) => {
        if (err) return reject(undefined);

        const data = JSON.parse(stdout);

        resolve({
          duration: Number(data.format.duration) || 0,
          width: data.streams[0]?.width || 0,
          height: data.streams[0]?.height || 0,
        });
      }
    );
  });
}
*/

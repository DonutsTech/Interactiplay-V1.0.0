import { StatusCodes } from "http-status-codes";
import { deleteFileFromS3 } from "../../config/s3";
import { CustomError } from "../../error";

class PhotoService {
  async deleteImageFile(fileName: string | undefined) {
    try {
      if (!fileName) {
        throw new CustomError('Nome do arquivo não fornecido', StatusCodes.BAD_REQUEST);
      }

      await deleteFileFromS3(fileName);
    } catch (error) {
      throw new CustomError('Erro ao deletar a imagem', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export const photoService = new PhotoService();

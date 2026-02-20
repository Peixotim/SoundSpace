import youtubedl from 'youtube-dl-exec';
import path from "path";
import fs from 'fs';
import { BadRequestError } from '../errors/BadRequestError';
import { AppError } from '../errors/AppError';

export class YoutubeService {

  public async getInfoMusic(url: string) {
    if (!url) {
      throw new BadRequestError(
        'The URL was not included in the request.',
        { field: 'url' },
        'URL_MISSING'
      );
    }

    try {
      return await youtubedl(url, {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ['referer:youtube.com', 'user-agent:googlebot']
      });

    } catch (error) {
      console.error('[YoutubeService] getInfoMusic error:', error);

      throw new AppError({
        message: 'Failed to fetch video information.',
        statusCode: 502,
        code: 'YOUTUBE_INFO_ERROR',
        details: error instanceof Error ? error.message : error
      });
    }
  }

  public async downloadAudio(url: string) {
    if (!url) {
      throw new BadRequestError(
        'The URL was not included in the request.',
        { field: 'url' },
        'URL_MISSING'
      );
    }

    const destinationDirectory = path.resolve(__dirname, '../../temp');

    if (!fs.existsSync(destinationDirectory)) {
      fs.mkdirSync(destinationDirectory, { recursive: true });
    }

    const fileId = Date.now().toString();
    const filePathOnServer = path.join(destinationDirectory, fileId);

    try {
      await youtubedl(url, {
        extractAudio: true,
        audioFormat: 'mp3',
        audioQuality: 0,
        output: filePathOnServer,
        noCheckCertificates: true,
        noWarnings: true
      });

      return {
        fileId,
        path: filePathOnServer
      };

    } catch (error) {
      console.error('[YoutubeService] downloadAudio error:', error);

      throw new AppError({
        message: 'Failed to download audio.',
        statusCode: 502,
        code: 'YOUTUBE_DOWNLOAD_ERROR',
        details: error instanceof Error ? error.message : error
      });
    }
  }
}
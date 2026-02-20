import { YoutubeService } from "../services/youtube.service";
import { Request, Response } from "express";

export class YoutubeController {
  private service = new YoutubeService();

  public async getInfo(req: Request, res: Response) {
    const { url } = req.body;

    const info = await this.service.getInfoMusic(url);

    return res.status(200).json(info);
  }
  

  public async downloadAudio(req: Request, res: Response) {
    const { url } = req.body;

    const filePath = await this.service.downloadAudio(url);

    return res.status(200).json({
      message: "Download completed successfully.",
      path: filePath
    });
  }
}
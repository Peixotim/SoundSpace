import { YoutubeService } from "../services/youtube.service";
import { Request , Response } from "express";


export class YoutubeController{
  private service = new YoutubeService();
  
  public async getInfo(req : Request , res: Response){
    try{
        const { url } = req.body;
        if(!url){
          throw new Error(`Url not found`);
        }
        const info = await this.service.getInfoMusic(url);
        console.log(info);
      return res.status(200).json(info);
    }catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`[YoutubeController] Error: ${error.message}`);
        
        return res.status(400).json({ 
          error: error.message 
        });
      }
      
      console.error(`[YoutubeController] Unknown Error:`, error);
      return res.status(500).json({ 
        error: "Unexpected internal error on the server." 
      });
    }
  }

}
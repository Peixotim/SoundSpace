import youtubedl from 'youtube-dl-exec';
import path from "path";
import fs from 'fs';
export class YoutubeService{

  public async getInfoMusic(url : string){
    try{
        const info = await youtubedl(url,{
          dumpSingleJson:true,
          noCheckCertificates:true,
          noWarnings:true,
          preferFreeFormats:true,
          addHeader:['referer:youtube.com', 'user-agent:googlebot']
        })
        return info;
    }catch (error: unknown) {

      if (error instanceof Error) {
        console.error(`[YoutubeService] Error in GetInfoMusic: ${error.message}`);
        throw error; 
      }
      console.error(`[YoutubeService] Unknown Error:`, error);
      throw new Error('Ocorreu um erro desconhecido ao processar a URL.');
    }
  }

    public async donwloadAudio(url : string){
    try{
      const destinationDirectory = path.resolve(__dirname,'../../temp');

      if(!fs.existsSync(destinationDirectory)){
        fs.mkdirSync(destinationDirectory,{ recursive:true });
      }

      const nameId = Date.now().toString();
      const filePathOnServer = path.join(destinationDirectory,`${nameId}`);

      console.log(`Starting download on the server...`)

      await youtubedl(url,{
        extractAudio:true,
        audioFormat:'mp3',
        audioQuality: 0,
        output: filePathOnServer,
        noCheckCertificates:true,
        noWarnings:true
      })

      return filePathOnServer;

    }catch(error:unknown){

    }
  }
}
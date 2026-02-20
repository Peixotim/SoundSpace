import { Router } from "express";
import { YoutubeController } from "../controllers/youtube.controller";

const youtubeRoutes = Router();

const youtubeController = new YoutubeController();

youtubeRoutes.post('/info' , youtubeController.getInfo.bind(youtubeController));
youtubeRoutes.post('/donwload', youtubeController.downloadAudio.bind(youtubeController));

export {youtubeRoutes}
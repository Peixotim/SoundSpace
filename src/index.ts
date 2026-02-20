import express from 'express';
import { configDotenv } from 'dotenv';
import { routes } from './routes/routes';
import { Request,Response } from 'express';
import { notFoundMiddleware } from './middlewares/not-found.middleware';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware';

configDotenv({
  path: '.env'
});

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(routes)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.get('/health', (req: Request, res : Response) =>{
  console.log(`API is running`)
  res.status(200).json(`API is running`)
})

app.listen(port , () =>{
  console.log(`Server is running in Port ${port}`)
})
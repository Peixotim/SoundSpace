import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv({
  path:'.env'
});

const app = express();
const port = process.env.PORT;

app.listen(port , () =>{
  console.log(`Server is running in Port ${port}`)
})
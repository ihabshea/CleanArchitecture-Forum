import express, {Router, Express}  from 'express'; 
import dotenv from 'dotenv';
import authenticateJWT from './middleware/authenticate';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import router from './routes';
dotenv.config();
const app: Express = express(); 
app.use(express.json())
app.use(authenticateJWT);

app.use(router);

// app.use(cors);

const port = process.env.PORT || 443;
// const uri: string  = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&ssl=true`;
const uri: string  = `mongodb://127.0.0.1:27017`;

const options: ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true };


mongoose.connect(uri, options).then(()=>{
    console.log(`listening on port ${port}`)
    app.listen(port);
})

import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import * as db from './config/db';
import router from './router';
import cors from 'cors';

dotenv.config();
db.connectDB();

const app = express();

app.use(json());

app.use(cors());

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));

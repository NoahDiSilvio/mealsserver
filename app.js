import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mealRouter from './routers/mealRouter.js';

export const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/meals', mealRouter);


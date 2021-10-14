import express, { Application } from 'express';
import cors from 'cors';

type Props = { app: Application };
const expressLoader = async ({ app }: Props) => {
  //#region Middlewares
  app.use(cors());
  app.use(express.json({ limit: '50mb', strict: false }));
  app.use(express.urlencoded({ extended: true }));
};

export default expressLoader;

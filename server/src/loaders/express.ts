import express, { Application, Request, Response } from 'express';
import { checkJwt } from '../utils/checkJwt';
import cors from 'cors';

type Props = { app: Application };
const expressLoader = async ({ app }: Props) => {
  //#region Middlewares
  app.use(cors());
  app.use(express.json({ limit: '50mb', strict: false }));
  app.use(express.urlencoded({ extended: true }));

  app.get('/public', (req: Request, res: Response) => {
    res.json({ message: 'Hello from public api' });
  });

  app.get('/private', checkJwt, (req: Request, res: Response) => {
    res.json({ message: 'Hello from private api' });
  });
};

export default expressLoader;

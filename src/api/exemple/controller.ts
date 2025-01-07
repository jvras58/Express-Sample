import { Request, Response } from 'express';

export const get = (_req: Request, res: Response) => {
  res.status(200).send({
    message: 'GET request to the exemple', 
  });
};
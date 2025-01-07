import { Request, Response, NextFunction } from 'express';

export const canGet = (_req: Request, _res: Response, next: NextFunction) => {
  return next();
};
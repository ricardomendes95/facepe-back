import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const profile = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  const authHeader = req.get('Authorization');

  const token = authHeader.split(' ')[1];

  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as { [key: string]: any };
  res.json(jwtPayload);
};

import { NextFunction, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import getEnv from '../config/env.config';
import { CustomExpressRequest, CustomJwtPayload } from '../types/common.types';

const authMw = async (
  req: CustomExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send('Unauthorized!');
    jwt.verify(
      token,
      getEnv('JWT_SECRET'),
      (err: JsonWebTokenError, decoded: CustomJwtPayload) => {
        if (err) return res.status(401).send(err.message);
        req.token = decoded;
        next();
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export default authMw;

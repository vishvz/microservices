import { NextFunction, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import getEnv from '../config/env.config';
import { CustomExpressRequest, CustomJwtPayload } from '../types/common.types';
import responseWrapper from '../helpers/responseWrapper';

const authMw = async (
  req: CustomExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const re = responseWrapper(false, 'Unauthorized', 401, null, null);
    res.status(401);
    if (!token) return res.json(re);
    jwt.verify(
      token,
      getEnv('JWT_SECRET'),
      (err: JsonWebTokenError, decoded: CustomJwtPayload) => {
        if (err) return res.json({ ...re, message: err.message, error: err });
        else res.status(200);
        req.token = decoded;
        return next();
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export default authMw;

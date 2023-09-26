import { NextFunction, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import getEnv from '../config/env.config';
import { CustomExpressRequest, CustomJwtPayload } from '../types/common.types';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';

const secretRef = getEnv('JWT_SECRET_REFRESH');
const expiresIn = getEnv('JWT_EXPIRE');
const secret = getEnv('JWT_SECRET');

const authMw = async (
  req: CustomExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const re = responseWrapper(
      false,
      COMMON_MESSAGE.Unauthorized,
      401,
      null,
      null,
    );
    res.status(401);
    if (!token) return res.json(re);
    const cb = (err: JsonWebTokenError, decoded: CustomJwtPayload) => {
      if (err && err.name === 'TokenExpiredError')
        return refreshToken(req, res, next);
      else if (err)
        return res.json(
          responseWrapper(false, COMMON_MESSAGE.Unauthorized, 401, null, err),
        );
      res.status(200);
      req.token = decoded;
      return next();
    };
    jwt.verify(token, secret, cb);
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = (
  req: CustomExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  const refreshToken = req.header('Refresh-Token')?.replace('Bearer ', '');
  const cb = (err: JsonWebTokenError, payload: CustomJwtPayload) => {
    res.status(401);
    if (err)
      return res.json(
        responseWrapper(
          false,
          COMMON_MESSAGE.Unauthorized,
          401,
          undefined,
          err,
        ),
      );
    res.status(200);
    const accessToken = jwt.sign({ user: payload.user }, secret, { expiresIn });
    res.setHeader('Authorization', 'Bearer ' + accessToken);
    req.token = payload;
    return next();
  };
  jwt.verify(refreshToken, secretRef, cb);
};

export default authMw;

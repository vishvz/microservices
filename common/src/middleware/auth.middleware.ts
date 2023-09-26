import { NextFunction, Response } from 'express';
import { CustomExpressRequest, CustomJwtPayload } from '../types/common.types';

const authMw = async (req: CustomExpressRequest, res: Response, next: NextFunction) => {
  try {
    const strPayload = req.header('x-auth-payload');
    if (!strPayload) return res.status(401).send('Unauthorized!');
    const payload = JSON.parse(strPayload) as CustomJwtPayload;
    if (!payload) return res.status(401).send('Unauthorized!');
    req.token = payload;
    return next();
  } catch (error) {
    console.log(error);
  }
};

export default authMw;

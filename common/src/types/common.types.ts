import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export type CustomJwtPayload = {
  name: string;
} & JwtPayload;

export type CustomExpressRequest = {
  token?: CustomJwtPayload;
} & Request;

import { Options } from 'http-proxy-middleware';
import { SERVICES_ROUTE } from '../utils/route.enums';
import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express-serve-static-core';

export type TPROXIES = {
  url: SERVICES_ROUTE;
  auth: boolean;
  creditCheck: boolean;
  rateLimit?: {
    windowMs: number;
    max: number;
  };
  proxy: Options;
};

export type CustomJwtPayload = {
  user?: any;
} & JwtPayload;

export type CustomExpressRequest = {
  token?: CustomJwtPayload;
} & Request;

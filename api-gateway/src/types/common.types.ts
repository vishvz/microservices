import { Options } from 'http-proxy-middleware';
import { SERVICES_ROUTE } from '../utils/route.enums';
import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express-serve-static-core';
import { USER_TYPES } from '../utils/constants';

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
  user?: {
    name: string;
    contactNo: string;
    id: number;
    country: string;
    createdAt: Date;
    ip?: string;
    type: USER_TYPES;
  };
} & JwtPayload;

export type CustomExpressRequest = {
  token?: CustomJwtPayload;
} & Request;

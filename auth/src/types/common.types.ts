import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { USER_TYPES } from '../utils/constants';

export type DefaultTableFieldsT = {
  id: number;
  countryId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
  isDeleted: boolean;
  isActive: boolean;
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

import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { USER_TYPES } from '../utils/constants';

export type DefaultTableFieldsT = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  createdBy: any;
  updatedBy: any;
  deletedBy: any;
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

export type FilterArguments = {
  search: string | undefined;
  sortOrder: 'asc' | 'desc';
  sortParam: string;
  limitPerPage: number;
  currentPage: number;
};

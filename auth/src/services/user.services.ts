import jwt from 'jsonwebtoken';
import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import User from '../model/user.model';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import getEnv from '../config/env.config';
import Country from '../model/country.model';
import { CustomExpressRequest, CustomJwtPayload, DefaultTableFieldsT } from '../types/common.types';
import { UserAttributes } from '../types/user.types';

const secret = getEnv('JWT_SECRET');
const secretRef = getEnv('JWT_SECRET_REFRESH');
const expiresIn = getEnv('JWT_EXPIRE');
const expiresInRef = getEnv('JWT_EXPIRE_REFRESH');

const statOtp = '2495';

export const createUserService = asyncHandler(async (req, res) => {
  const data = req.body;
  const exist = await User.findOne({ where: { contactNo: data.contactNo } });
  if (exist) {
    res.status(404);
    return responseWrapper(true, COMMON_MESSAGE.Message_getMsgForUniqueName, 404, exist);
  }
  const user = User.build(data);
  const createdUser = await user.save();
  res.status(201);
  return responseWrapper(true, COMMON_MESSAGE.Success, 201, undefined, { createdUser, otp: statOtp });
});

export const loginOtpService = asyncHandler(async (req, res) => {
  const { contactNo } = req.body;
  const exist = await User.findOne({
    where: { contactNo },
    include: { as: 'country', model: Country },
  });
  if (!exist) {
    res.status(404);
    return responseWrapper(true, COMMON_MESSAGE.User_not_exist, 404);
  }
  res.status(200);
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, {
    otp: statOtp,
    exist,
  });
});

export const verifyOtpService = asyncHandler(async (req, res) => {
  const { otp, ip } = req.body;
  if (otp !== statOtp) {
    res.status(404);
    return responseWrapper(true, COMMON_MESSAGE.OTP_INVALID, 404);
  }
  const record = (await User.findAll())[0].toJSON();
  const { accessToken, refreshToken } = signJwt(record, ip);
  // res.setHeader('Authorization', 'Bearer ' + accessToken);
  // res.setHeader('Refresh-Token', 'Bearer ' + refreshToken);
  res.status(200);
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, {
    accessToken,
    refreshToken,
  });
});

export const currentUserService = asyncHandler(async (req: CustomExpressRequest, res) => {
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, req.token, undefined);
});

export const signJwt = (data: UserAttributes & DefaultTableFieldsT, ip: string | undefined) => {
  const user: CustomJwtPayload['user'] = {
    contactNo: data.contactNo,
    id: data.id,
    createdAt: data.createdAt,
    country: data?.country ?? '',
    name: data.name,
    type: data?.type,
  };
  if (ip) user.ip = ip;
  const accessToken = jwt.sign({ user }, secret, { expiresIn });
  const refreshToken = jwt.sign({ user }, secretRef, {
    expiresIn: expiresInRef,
  });
  return { accessToken, refreshToken };
};

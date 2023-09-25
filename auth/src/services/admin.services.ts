import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import User from '../model/user.model';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import Country from '../model/country.model';
import { USER_TYPES } from '../utils/constants';
import { signJwt } from './user.services';
import { UserAttributes } from '../types/user.types';
import bcrypt from 'bcrypt';

export const createAdminService = asyncHandler(async (req, res) => {
  const data = req.body as UserAttributes;
  const ip = req.body?.ip;
  const exist = await User.findOne({ where: { contactNo: data.contactNo } });
  if (exist) {
    res.status(404);
    return responseWrapper(true, COMMON_MESSAGE.Message_getMsgForUniqueName, 404, exist);
  }
  const password = await bcrypt.hash(data.password, 10);
  const user = User.build({ ...data, password, type: USER_TYPES.ADMIN });
  const createdUser = (await user.save())?.toJSON();
  const token = signJwt(createdUser, ip);
  res.status(201);
  return responseWrapper(true, COMMON_MESSAGE.Success, 201, undefined, token);
});

export const loginService = asyncHandler(async (req, res) => {
  const { contactNo, password, ip } = req.body;
  const exist = (
    await User.findOne({
      where: { contactNo },
      include: { as: 'country', model: Country },
    })
  )?.toJSON();
  res.status(404);
  if (!exist) {
    return responseWrapper(true, COMMON_MESSAGE.User_not_exist, 404);
  }
  const passwordMatch = await bcrypt.compare(password, exist.password);
  if (!passwordMatch) {
    return responseWrapper(true, COMMON_MESSAGE.Wrong_pass, 404);
  }
  const token = signJwt(exist, ip);
  res.status(200);
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, token);
});

import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import userModel from '../model/user.model';
import { COMMON_MESSAGE } from '../utils/messages.enum';

export const createUserService = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const exist= await userModel.findOne({email:data?.email});
  if(exist){
    return responseWrapper(true, COMMON_MESSAGE.Message_getMsgForUniqueName, undefined
    , exist);
  }
  const user = new userModel(data);
  const createdUser = await user.save();
  return responseWrapper(true, COMMON_MESSAGE.Success, undefined
    , createdUser);

});

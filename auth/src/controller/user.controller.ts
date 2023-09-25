import { createUserService, currentUserService, loginOtpService, verifyOtpService } from '../services/user.services';

export const createUserCt = async (req, res, next) => {
  const result = await createUserService(req, res, next);
  return res.json(result);
};
export const loginCt = async (req, res, next) => {
  const result = await loginOtpService(req, res, next);
  return res.json(result);
};
export const verifyOtpCt = async (req, res, next) => {
  const result = await verifyOtpService(req, res, next);
  return res.json(result);
};

export const currentUserCt = async (req, res, next) => {
  const result = await currentUserService(req, res, next);
  return res.json(result);
};

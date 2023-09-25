import { createAdminService, loginService } from '../services/admin.services';

export const createAdminCt = async (req, res, next) => {
  const result = await createAdminService(req, res, next);
  return res.json(result);
};
export const loginAdminCt = async (req, res, next) => {
  const result = await loginService(req, res, next);
  return res.json(result);
};

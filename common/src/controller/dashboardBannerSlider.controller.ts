import {
  createDashboardBannerService,
  deleteDashboardBannerService,
  editDashboardBannerService,
  getAllDashboardBannerService,
  inActiveDashboardBannerService,
} from '../services/dashboardBannerSlider.services';

export const createDashboardBannerCt = async (req, res, next) => {
  const result = await createDashboardBannerService(req, res, next);
  return res.json(result);
};
export const editDashboardBannerCt = async (req, res, next) => {
  const result = await editDashboardBannerService(req, res, next);
  return res.json(result);
};
export const deleteDashboardBannerCt = async (req, res, next) => {
  const result = await deleteDashboardBannerService(req, res, next);
  return res.json(result);
};
export const inActiveDashboardBannerCt = async (req, res, next) => {
  const result = await inActiveDashboardBannerService(req, res, next);
  return res.json(result);
};
export const getAllDashboardBannerCt = async (req, res, next) => {
  try {
    const result = await getAllDashboardBannerService(req, res, next);
    return res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

import isObjectId from '../helpers/isObjectId';
import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import BannerSliderModel from '../model/dashboardBannerSlider.model';
import { FilterArguments } from '../types/common.types';
import { LIMIT_PER_PAGE } from '../utils/constants';
import { COMMON_MESSAGE } from '../utils/messages.enum';

export const createDashboardBannerService = asyncHandler(async (req, res, next) => {
  const record = await new BannerSliderModel(req.body).save();
  return responseWrapper(true, COMMON_MESSAGE.Success, 201, undefined, record);
});

export const editDashboardBannerService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const record = await BannerSliderModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});

export const deleteDashboardBannerService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const record = await BannerSliderModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { new: true },
  );
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});
export const inActiveDashboardBannerService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const { isActive } = req.body;
  const record = await BannerSliderModel.findByIdAndUpdate(
    id,
    { $set: { isActive: !isActive } },
    { new: true },
  );
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});
export const getAllDashboardBannerService = asyncHandler(async (req, res, next) => {
  const { currentPage = 1, limitPerPage = LIMIT_PER_PAGE, search } = req.body as FilterArguments;

  const match = {
    isDeleted: false,
  };

  const searchQuery = { $regex: search, $options: 'i' };
  throw new Error('Error');
  if (search && search !== '') match['or'] = [{ title: searchQuery }];

  const skip = limitPerPage * currentPage - limitPerPage;

  const records = await BannerSliderModel.aggregate([
    {
      $match: match,
    },
    { $skip: skip },
    { $limit: limitPerPage },
  ]);
  const { length: total } = await BannerSliderModel.aggregate([
    {
      $match: match,
    },
  ]);

  const showFrom = records.length ? (currentPage - 1) * limitPerPage + 1 : 0;
  const showTo = records.length ? showFrom + records.length - 1 : 0;

  const data = {
    records,
    currentPage,
    pages: Math.ceil(total / limitPerPage),
    total,
    from: showFrom,
    to: showTo,
  };
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, data);
});

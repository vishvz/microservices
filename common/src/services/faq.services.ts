import isObjectId from '../helpers/isObjectId';
import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import FaqModel from '../model/faq.model';
import { FilterArguments } from '../types/common.types';
import { LIMIT_PER_PAGE } from '../utils/constants';
import { COMMON_MESSAGE } from '../utils/messages.enum';

export const createFaqService = asyncHandler(async (req, res, next) => {
  const record = await new FaqModel(req.body).save();
  return responseWrapper(true, COMMON_MESSAGE.Success, 201, undefined, record);
});
export const editFaqService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const record = await FaqModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});
export const deleteFaqService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const record = await FaqModel.findByIdAndUpdate(id, { $set: { isDeleted: true } }, { new: true });
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});
export const inActiveFaqService = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const err = isObjectId([id]);
  if (err) return err;
  const { isActive } = req.body;
  const record = await FaqModel.findByIdAndUpdate(
    id,
    { $set: { isActive: !isActive } },
    { new: true },
  );
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, undefined, record);
});
export const getAllFaqService = asyncHandler(async (req, res, next) => {
  const { currentPage, limitPerPage = LIMIT_PER_PAGE, search } = req.body as FilterArguments;

  const match = {
    isDeleted: false,
  };

  const searchQuery = { $regex: search, $options: 'i' };

  if (search && search !== '') match['or'] = [{ question: searchQuery }, { answer: searchQuery }];

  const skip = limitPerPage * currentPage - limitPerPage;

  const records = await FaqModel.aggregate([
    {
      $match: match,
    },
    { $skip: skip },
    { $limit: limitPerPage },
  ]);
  const { length: total } = await FaqModel.aggregate([
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

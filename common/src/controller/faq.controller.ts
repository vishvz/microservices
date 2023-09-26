import {
  createFaqService,
  deleteFaqService,
  editFaqService,
  getAllFaqService,
  inActiveFaqService,
} from '../services/faq.services';

export const createFaqCt = async (req, res, next) => {
  const result = await createFaqService(req, res, next);
  return res.json(result);
};
export const editFaqCt = async (req, res, next) => {
  const result = await editFaqService(req, res, next);
  return res.json(result);
};
export const deleteFaqCt = async (req, res, next) => {
  const result = await deleteFaqService(req, res, next);
  return res.json(result);
};
export const inActiveFaqCt = async (req, res, next) => {
  const result = await inActiveFaqService(req, res, next);
  return res.json(result);
};
export const getAllFaqCt = async (req, res, next) => {
  const result = await getAllFaqService(req, res, next);
  return res.json(result);
};

import { ZodType } from 'zod';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import { CustomExpressRequest } from '../types/common.types';
import { NextFunction, Response } from 'express';

const schemaValidator =
  (schema: ZodType) => async (req: CustomExpressRequest, res: Response, next: NextFunction) => {
    const re = responseWrapper(false, COMMON_MESSAGE.Schema_Validation_Fail, 400, null, null);
    try {
      const valid = schema.safeParse(req.body);
      if (valid.success === false) {
        const { errors } = valid.error;
        res.status(400);
        return res.json({ ...re, error: errors });
      } else {
        req.body = valid.data;
        return next();
      }
    } catch (error) {
      res.status(400);
      return res.json({ ...re, error: error.message || '' });
    }
  };
export default schemaValidator;

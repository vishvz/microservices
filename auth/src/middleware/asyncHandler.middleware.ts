import { NextFunction, Request, RequestHandler, Response } from 'express';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import logger from '../helpers/logger';
import { CustomExpressRequest } from '../types/common.types';

/**
 *
 * @param handler Express request handler.
 * @returns handler
 * @description Wrap async functions from services into this and it'll handle trycatch for them easily at global level.
 */
export default function asyncHandler(handler: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return handler(req, res, next);
    } catch (error) {
      console.log(error.message, 'Async Middleware');
      res.status(500);
      const data = { method: req.method, api: req.url, body: req.body };
      logger.error(error || 'Unknown error!', { data });
      return res.json(responseWrapper(false, COMMON_MESSAGE.Server_Error, 500, undefined, error));
    }
  };
}

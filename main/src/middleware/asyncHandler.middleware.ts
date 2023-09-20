import { NextFunction, Request, RequestHandler, Response } from 'express';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import logger from '../helpers/logger';

/**
 * 
 * @param handler Express request handler.
 * @returns handler
 * @description Wrap async functions from services into this and it'll handle trycatch for them easily at global level.
 */
export default function asyncHandler(handler: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.log(error.message, 'Mw');
      res.status(500);
  const data = { method:req.method, api:req.url, body:req.body };
  logger.error(error || 'Undefined error!', { data });
       return res.json(responseWrapper(false, COMMON_MESSAGE.Server_Error,500,undefined,error))
    }
  };
}

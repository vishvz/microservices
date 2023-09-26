import { isValidObjectId } from 'mongoose';
import responseWrapper from './responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';

/**
 *
 * @param id Array of string to check for ObjectId
 * @returns Validation response or null if valid ids passed
 */
export default function isObjectId(id: string[]) {
  const c = id.every(x => isValidObjectId(x));
  if (!c) return responseWrapper(false, COMMON_MESSAGE.Mongoose_id_validation, 400);
  else null;
}

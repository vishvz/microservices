import { ZodType } from 'zod';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';


const schemaValidator =
  (schema: ZodType) =>
    async (req, res, next) => {
      try {
        const valid: any = schema.safeParse(req.body);
        if (!valid.success) {
          const { errors } = valid.error;
        res.status(400)
          return res.json(responseWrapper(
            false,
            COMMON_MESSAGE.Schema_Validation_Fail,
            400,
            null,
            errors,
          ))
        } else return next();
      } catch (error) {
        res.status(400)
        return res.json(responseWrapper(
          false,
          COMMON_MESSAGE.Schema_Validation_Fail,
          400,
          null,
          error?.message,
        ))
      }
    };
export default schemaValidator;
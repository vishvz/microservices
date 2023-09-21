import express from 'express';
import { createUser } from '../controller/user.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { userSchema } from '../model/user.model';
import { CustomExpressRequest } from '../types/common.types';

const userRoute = express.Router();

/**
 * @openapi
 * /api/common:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns "Hello".
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Server error.
 */

userRoute.get('/', (req: CustomExpressRequest, res) => {
  return res.json(req.token);
});
userRoute.post('/create', schemaValidator(userSchema), createUser);

export default userRoute;

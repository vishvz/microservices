import express from 'express';
import { createAdminCt, loginAdminCt } from '../controller/admin.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { UserSchema } from '../model/user.model';
import { ADMIN_ROUTE } from '../utils/route.enums';
import authMw from '../middleware/auth.middleware';
import z from 'zod';
import { CustomExpressRequest } from '../types/common.types';
const adminRoute = express.Router();

adminRoute.post(ADMIN_ROUTE.create, schemaValidator(UserSchema.extend({ password: z.string() })), createAdminCt);
adminRoute.post(ADMIN_ROUTE.login, loginAdminCt);
adminRoute.get('/admin/test', authMw, (req: CustomExpressRequest, res, next) => {
  console.log(req.method);

  console.log(req.token);
  return res.json(req.token);
});

export default adminRoute;

/**
 * @openapi
 * /api/auth/create-admin/:
 *  post:
 *     description: Get back req body!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                 countryId:
 *                   type: number
 *                 email:
 *                   type: string
 *                 contactNo:
 *                   type: string
 *                 dob:
 *                   type: string
 *                 password:
 *                   type: string
 *                 ip:
 *                   type: string
 *     responses:
 *       200:
 *        description: A user object.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Contact number already exists.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/auth/admin-login/:
 *  post:
 *     description: Get back req body!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 contactNo:
 *                   type: string
 *                 password:
 *                   type: string
 *                 ip:
 *                   type: string
 *     responses:
 *       200:
 *        description: A user object.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Contact number already exists.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/auth/admin/test/:
 *  get:
 *     security:
 *       - BearerAuth: []
 *       - RefreshTokenAuth: []
 *     responses:
 *       200:
 *        description: User.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: invalid token.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 */

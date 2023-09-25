import express from 'express';
import { createUserCt, loginCt, verifyOtpCt, currentUserCt } from '../controller/user.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { UserSchema } from '../model/user.model';
import { USER_ROUTE } from '../utils/route.enums';
import authMw from '../middleware/auth.middleware';
const userRoute = express.Router();

userRoute.post(USER_ROUTE.register, schemaValidator(UserSchema), createUserCt);
userRoute.post(USER_ROUTE.login, loginCt);
userRoute.post(USER_ROUTE.verifyOtp, verifyOtpCt);

userRoute.get(USER_ROUTE.test, authMw, currentUserCt);

export default userRoute;

/**
 * @openapi
 * /api/auth/register/:
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
 * /api/auth/login/:
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
 * /api/auth/verify-otp/:
 *  post:
 *     description: Verify otp!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 otp:
 *                   type: string
 *                 ip:
 *                   type: string
 *     responses:
 *       200:
 *        description: AccessToken and refreshToken.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Otp invalid.
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
 * /api/auth/test/:
 *  get:
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
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

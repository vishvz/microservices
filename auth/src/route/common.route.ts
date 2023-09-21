/**
 * @description Independent routes (like user) which are not associated with any particular module but whole application.
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import getEnv from '../config/env.config';
const commonRoute = express.Router();

/**
 * @openapi
 * /api/auth/:
 *   get:
 *     description: Get guest token for user!
 *     responses:
 *       200:
 *         description: Returns a signed jwt string.
 *
 * /api/auth/get-body/:
 *  post:
 *     description: Get back req body!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *        description: A user object.
 *        content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: Jessica Smith
 */

commonRoute.get('/', async (req, res) => {
  const token = jwt.sign(
    { name: 'Guest User', isGuest: true },
    getEnv('JWT_SECRET'),
    {
      expiresIn: getEnv('JWT_EXPIRE'),
    },
  );
  return res.json({ token });
});

commonRoute.post('/get-body', (req, res) => {
  return res.json(req.body);
});

export default commonRoute;

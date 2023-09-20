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
commonRoute.post('/', (req, res) => {
  return res.json(req.body);
});

export default commonRoute;

import express from 'express';
import { createUser } from '../controller/user.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { userSchema } from '../model/user.model';

const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  return res.send('Hello');
});
userRoute.post('/create', schemaValidator(userSchema), createUser);

export default userRoute;

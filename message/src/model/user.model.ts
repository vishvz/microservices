import { UserModel } from '../types/user.types';
import { Schema, model, models } from 'mongoose';
import { z } from 'zod';



const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
   
    password: {
      type: String,
    },
 
  },
  { timestamps: true },
);

export const userSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export default (models?.User as UserModel) || model('User', UserSchema);

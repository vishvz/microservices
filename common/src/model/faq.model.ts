import { FAQAttributes } from '../types/dashboard/faqs.types';
import { Schema, model, Types } from 'mongoose';
import { z } from 'zod';
import { MODEL_NAMES } from '../utils/constants';
import { DefaultTableFieldsT } from '../types/common.types';

const { ObjectId } = Types;

const FaqSchema = new Schema<FAQAttributes & DefaultTableFieldsT>(
  {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    createdBy: ObjectId,
    deletedBy: ObjectId,
    updatedBy: ObjectId,
    deletedAt: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const FaqSchemaV = z.object({
  question: z.string().nonempty(),
  answer: z.string(),
});

const FaqModel = model(MODEL_NAMES.Faq, FaqSchema);
export default FaqModel;

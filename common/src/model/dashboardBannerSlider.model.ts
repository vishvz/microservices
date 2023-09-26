import {
  BannerSliderAttributes,
  BannerSliderModel,
} from '../types/dashboard/bannerSlider.types';
import { Schema, model, Types } from 'mongoose';
import { z } from 'zod';
import { MODEL_NAMES } from '../utils/constants';
import { DefaultTableFieldsT } from '../types/common.types';

const { ObjectId } = Types;

const BannerSliderSchema = new Schema<
  BannerSliderAttributes & DefaultTableFieldsT
>(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
      unique: true,
      required: true,
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

export const BannerSliderSchemaV = z.object({
  title: z.string().nonempty(),
  image: z.string(),
});

const BannerSliderModel = model(
  MODEL_NAMES.DashboardBannerSlider,
  BannerSliderSchema,
);
export default BannerSliderModel;

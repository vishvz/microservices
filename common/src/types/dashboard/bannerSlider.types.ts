import { Model } from 'mongoose';
import { DefaultTableFieldsT } from '../common.types';

export type BannerSliderAttributes = {
  title: string;
  image: string;
};

export type BannerSliderModel = Model<
  BannerSliderAttributes & DefaultTableFieldsT
>;

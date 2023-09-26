import { Model } from 'mongoose';
import { DefaultTableFieldsT } from '../common.types';

export type FAQAttributes = {
  question: string;
  answer: string;
};

export type FAQModel = Model<FAQAttributes & DefaultTableFieldsT>;

import { Types } from "mongoose";

export type CarByCategory = {
  _id: Types.ObjectId;
  name: string;
  slogan: string;
  priceFrom: number;
  slug: string;
  category: string;
  avatar: string;
  mainInfo: {
    seats: number;
    gear: string;
    fuel: string;
    engine: string;
  };
};

import { Types } from "mongoose";

export interface CarType {
  _id: Types.ObjectId;
  name: string;
  slogan: string;
  priceFrom: number;
  slug: string;
  category: string;
  tier: string;
  registration: number;
  avatar: string;
  mainInfo: {
    seats: number;
    gear: string;
    engine: string;
    fuel: string;
  };
  colors: { color: string; colorImg: string; colorText: string }[];
  carLines: {
    name: string;
    price: number;
    tax: string;
  }[];
  brochure: string;
}

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

export interface CarLineType {
  name: string;
  price: number;
  tax: string;
}

export type CarLinesType = {
  name: string;
  carLines: CarLineType[];
};

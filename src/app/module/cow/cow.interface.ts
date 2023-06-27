import { Model } from "mongoose";

export type ILocation =
  | "Dhaka"
  | "Chattogram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh";

export type IBreed =
  | "Brahman"
  | "Nellore"
  | "Sahiwal"
  | "Gir"
  | "Indigenous"
  | "Tharparkar"
  | "Kankrej";

export type ILabel = "for sale" | "sold out";

export type ICategory = "Dairy" | "Beef" | "Dual Purpose";

export type ICow = {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: IBreed;
  weight: number;
  label: ILabel;
  category: ICategory;
  seller: string;
};

export type ICowFilters = {
  searchTerm?: string;
};

export type Cow = Model<ICow>;

import { IBaseState, ILabelValue } from "./base";

export interface IProductState {
  category: Partial<IBaseState> & { list?: ILabelValue[] };
  products: Partial<IBaseState> & Partial<IProductlist>;
}

export interface IProductlist {
  featured: IProductType;
  all: IProductType;
}

export interface IProductType {
  label: string;
  list: Array<Partial<IProduct>>;
}

export interface IProduct {
  img: string[];
  name: string;
  description: string;
  features: string[];
  price: number;
  stock: number;
  directions: string[];
  ingredients: string[];
  packages: Array<Partial<IPackage>>;
  recommended: Array<Partial<IProduct>>;
}

export interface IPackage {
  img: string;
  name: string;
  description: string;
  ingredients: string[];
}

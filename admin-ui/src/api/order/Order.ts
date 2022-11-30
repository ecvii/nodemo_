import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  cart?: Array<Product>;
  createdAt: Date;
  createdBy?: User | null;
  id: string;
  updatedAt: Date;
};

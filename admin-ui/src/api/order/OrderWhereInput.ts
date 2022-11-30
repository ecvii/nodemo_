import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  cart?: ProductListRelationFilter;
  createdBy?: UserListRelationFilter;
  id?: StringFilter;
};

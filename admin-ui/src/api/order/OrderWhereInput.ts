import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  cart?: ProductListRelationFilter;
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
};

import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  cart?: ProductUpdateManyWithoutOrdersInput;
  createdBy?: UserWhereUniqueInput | null;
};

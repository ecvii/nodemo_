import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserUpdateManyWithoutOrdersInput } from "./UserUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  cart?: ProductUpdateManyWithoutOrdersInput;
  createdBy?: UserUpdateManyWithoutOrdersInput;
};

import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserCreateNestedManyWithoutOrdersInput } from "./UserCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  cart?: ProductCreateNestedManyWithoutOrdersInput;
  createdBy?: UserCreateNestedManyWithoutOrdersInput;
};

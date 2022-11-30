import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  cart?: ProductCreateNestedManyWithoutOrdersInput;
  createdBy?: UserWhereUniqueInput | null;
};

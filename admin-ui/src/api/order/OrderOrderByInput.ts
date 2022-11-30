import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

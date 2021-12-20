import { OrderInferface } from "./order-interface";
import { UserInterface } from "./user-interface";

export interface TransactionInterface {
  id?: number;
  order?: OrderInferface;
  user?: UserInterface;
  from?: string;
  transactionId?: string;
  amount?: number;
  status?: string;
  paimentType?: string;
  currency?: string;
  errorMessage?: string;
}

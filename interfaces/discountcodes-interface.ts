import { RestaurantInferface } from './restaurant-interface'

export interface DiscountcodesInterface {
  id?: number;
  name?: string;
  code?: string;
  reduce_percent?: number;
  reduce_value?: number;
  nb_max_use?: number;
  nb_use?: number;
  minimum_total?: number;
  enable?: boolean;
  date_limit?: Date;
  restaurant?: RestaurantInferface;
  rejection_raison?: string;
}

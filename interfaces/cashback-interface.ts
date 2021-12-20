import { RestaurantInferface } from './restaurant-interface'

export interface CashbackInterface {
  id?: number;
  reducePercent?: number;
  reduceValue?: number;
  nbMaxUse?: number;
  nbUse?: number;
  minimumTotal?: number;
  enable?: boolean;
  dateStart?: Date;
  dateEnd?: Date;
  restaurant?: RestaurantInferface;
  rejectionRaison?: string;
}

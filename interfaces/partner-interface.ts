import { RestaurantInferface } from './restaurant-interface'
import { UserInterface } from './user-interface'

export interface PartnerInterface {
  id?: number;
  user?: UserInterface;
  restaurant?: RestaurantInferface;
  percent?: string;
  startDate?: Date;
  endDate?: Date;
  status?: number;
  zoneActions?: string;
  zoneActionsLabel? :string;
  sumPrestation?: number;
  nbPrestation?: number;
}

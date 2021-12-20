import { RestaurantInferface } from './restaurant-interface'
import { UserInterface } from './user-interface'

export interface BookingInterface {
  id?: number;
  booking_status?: number;
  nb_person?: number;
  date_reservation?: Date;
  user?: UserInterface;
  rejection_raison?: string;
  restaurant?: RestaurantInferface;
  is_pay_by_restaurant?: number;
  heal_pass?: boolean;
}

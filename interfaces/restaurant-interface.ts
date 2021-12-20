import { CashbackInterface } from './cashback-interface';
import { UserInterface } from './user-interface';

export interface RestaurantInferface {
	id?: number;
	name?: string;
	photo?: string;
	logo?: string;
	status?: number;
	email?: string;
	phone?: string;
	rib?: string;
	slug?: string;
	delivery_address_number?: string;
	delivery_address_street_name?: string;
	delivery_address_postal_code?: string;
	delivery_address_city_name?: string;
	delivery_longitude?: string;
	delivery_latitude?: string;
	delivery_google_place_id?: string;
	food_types?: FoodTypeInterface[];
	average_evaluation?: number;
	average_pricing?: number;
	type?: string;
	food_status?: number;
	history?: string;
	opening_monday?: string;
	opening_tuesday?: string;
	opening_wednesday?: string;
	opening_thursday?: string;
	opening_friday?: string;
	opening_saturday?: string;
	opening_sunday?: string;
	social_facebook?: string;
	social_twitter?: string;
	social_tumblr?: string;
	social_linkedin?: string;
	social_instagram?: string;
	social_pinterest?: string;
	website?: string;
	delivery?: number;
	take_away?: number;
	eat_in?: number;
	distance?: number;
	can_evaluate?: boolean;
	user_evaluation?: number;
	users?: UserInterface[];
	updated_at?: Date;
	nb_products?: number;
	average_time_to_eat?: number;
	nb_place_for_eat?: number;
	outOffdelivery?: boolean;
	public_token?: string;
	notify_restaurant_new_order?: string;
	nb_deliver_arround?: number;
	sponsorship?: string;
	enterpriseId?: number;
	cashback?: CashbackInterface;
}

export interface FoodTypeInterface {
	id?: number;
	name?: string;
	rank?: number;
	restaurant_id?: number;
	foods?: FoodInterface[];
	countProducts?: number;
}

export interface FoodInterface {
	id?: number;
	name?: string;
	description?: string;
	photo?: string;
	rank?: string;
	group_id?: number;
	price?: number;
	available?: boolean;
	tva?: number;
	average_preparation_duration?: number;
	max_quantity_day?: number;
	type?: string;
	nb_accompanying?: number;
	min_accompanying?: number;
	max_accompanying?: number;
	accompanyings?: AccompanyingInterface[];
}

export interface RestaurantOpeningDay {
	enable?: boolean;
	label?: string;
	key?: string;
	opening?: RangeOpeningDay[];
}

export interface RangeOpeningDay {
	startHour?: number;
	startMinute?: number;
	endHour?: number;
	endMinute?: number;
}

export interface AccompanyingInterface {
	id?: number;
	name?: string;
	food_id?: number;
	min_selection?: number;
	max_selection?: number;
	price?: number;
	vat_pecent?: number;
	is_alcohol?: number;
	status?: number;
}

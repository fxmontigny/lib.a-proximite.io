import { CashbackInterface } from './cashback-interface';
import { DeliverProfilInterface } from './deliver-interface';
import { DiscountcodesInterface } from './discountcodes-interface';
import { RestaurantInferface } from './restaurant-interface';
import { UserInterface } from './user-interface';

export interface OrderInferface {
	id?: number;
	restaurant_id?: number;
	status?: number;
	products?: ProductOrderInterface[];
	total?: number;
	sum?: number; // equal total
	quantity?: number;
	restaurant?: RestaurantInferface;
	updated_at?: number;
	rejection_raison?: string;
	user?: UserInterface;
	user_service_charge_sum?: number;
	restaurant_service_charge_sum?: number;
	delivery_service_charge?: number;
	service_charge?: number; // equal user_service_charge_sum
	transferDone?: boolean;
	public_token?: string;
	delivery_option?: string;
	delivery_pricing?: number;
	order_full_address?: string;
	delivery_note?: string;
	distanceString?: string;
	distance?: number;
	order_distance?: number;
	order_longitude?: number;
	order_latitude?: number;
	delivery_code_confirmation?: string;
	deliver?: DeliverProfilInterface;
	delivery_id?: number;
	discountcode?: DiscountcodesInterface;
	totalDiscount?: number;
	totalTransactionsSuccessed?: number;
	totalAcceptableTRD?: number;
	totalAvailableTRD?: number;
	preparationDate?: string;
	delivery_date?: Date;
	transactions?: any[];
	cashbackSum?: number;
	cashback?: CashbackInterface;
	userWallet?: number;
}

export interface ProductOrderInterface {
	id?: number;
	product_id?: number;
	quantity?: number;
	original_price?: number;
	original_name?: string;
	original_description?: string;
	original_type?: string;
	original_tva?: number;
	min_accompanying?: number;
	max_accompanying?: number;
	accompanyings?: ProductOrderInterface[];
}

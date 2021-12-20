import { OrderInferface } from './order-interface';

export interface CustomerInterface {
	id?: number;
	firstName?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	order?: OrderInferface;
}

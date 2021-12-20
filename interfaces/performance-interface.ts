import { OrderInferface } from './order-interface';

export interface PerformanceInferface {
	date?: Date;
	nbOrders?: number;
	nbOrdersSuccessful?: number;
	nbOrdersCancelled?: number;
	totalWin?: number;
	orders?: OrderInferface[];
	totalBankFee?: number;
	totalDelivreeticFee?: number;
	totalDelivreeticFeeHT?: number;
	totalTransfer?: number;
	totalForRestaurant?: number;
	totalCollectedTVA?: number;
	paymentPending?: boolean;
	nbBooking?: number;
	totalDiscount?: number;
}

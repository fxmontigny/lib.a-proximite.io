import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	constructor(private serverService: ServerService) {}

	getCustomer(restaurantId: number) {
		return this.serverService
			.post('customers/get-all', { restaurant_id: restaurantId })
			.then((data) => data.data || []);
	}
}

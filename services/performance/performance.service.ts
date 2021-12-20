import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class PerformanceService {
	constructor(private serverService: ServerService) {}

	getRestaurantPerformances(restaurantId) {
		return this.serverService
			.get('performances/get-all-performances/' + restaurantId)
			.then((data) => data.data || []);
	}

	getDeliverPerformances() {
		return this.serverService.get('performances/get-deliver-performances').then((data) => data.data || []);
	}
}

import { Injectable } from '@angular/core';
import { FoodTypeInterface } from 'lib/interfaces/restaurant-interface';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class FoodService {
	selectedFoodtype: BehaviorSubject<FoodTypeInterface> = new BehaviorSubject<FoodTypeInterface>(null);
	foodtypes: BehaviorSubject<FoodTypeInterface[]> = new BehaviorSubject<FoodTypeInterface[]>([]);

	constructor(private serverService: ServerService) {}
	addFoodType(restaurantId, name = '') {
		return this.serverService.post('foods/add-food-types', { name, restaurantId }).then((data) => data.data || []);
	}

	getFoodTypeDetails(id) {
		return this.serverService.get('foods/get-food-type-details/' + id).then((data) => data.data || null);
	}

	reorderFoodType(list) {
		return this.serverService.put('foods/reorder-food-types', { list });
	}

	reorderFoods(list) {
		return this.serverService.put('foods/reorder-foods', { list });
	}

	updateTitle(typeId, typeTitle) {
		return this.serverService.put('foods/update-title-food-type/' + typeId, { name: typeTitle });
	}

	removeType(typeId) {
		return this.serverService.delete('foods/delete-food-type/' + typeId);
	}

	createFood(params) {
		return this.serverService.post('foods/add-food', params);
	}

	updateFood(foodId, params) {
		return this.serverService.put('foods/update-food', { foodId, ...params });
	}

	getFoodDetails(foodId) {
		return this.serverService.get('foods/food-details/' + foodId).then((data) => data.data || null);
	}

	updateFoodPutPause(foodId) {
		return this.serverService.put('foods/food-pause/' + foodId).then((data) => data.data || null);
	}

	updateFoodPutPlay(foodId) {
		return this.serverService.put('foods/food-play/' + foodId).then((data) => data.data || null);
	}

	deleteFood(foodId) {
		return this.serverService.delete('foods/delete-food/' + foodId).then((data) => data.data || null);
	}

	copyFood(foodId) {
		return this.serverService.post('foods/copy-food/' + foodId).then((data) => data.data || null);
	}
}

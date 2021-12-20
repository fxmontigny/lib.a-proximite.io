import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	constructor(private serverService: ServerService) {}

	search(params) {
		return this.serverService.post('search/get-restaurants', params).then((data) => data.data || []);
	}
}

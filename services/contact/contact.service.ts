import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class ContactService {
	constructor(private serverService: ServerService) {}

	contact(params) {
		return this.serverService.post('contact/message', params);
	}
}

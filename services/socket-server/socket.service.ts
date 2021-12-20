import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	socket;
	constructor() {}

	initSocket() {
		if (!this.socket) {
			this.socket = io(environment.site.api);
		}
	}
}

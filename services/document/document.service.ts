import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class DocumentService {
	constructor(private serverService: ServerService) {}

	getRestaurantDocuments() {
		return this.serverService.get('documents/get-restaurant-documents').then((data) => data.data || []);
	}

	getAdminRestaurantDocuments(id) {
		return this.serverService.get('documents/get-admin-restaurant-documents/' + id).then((data) => data.data || []);
	}

	uploadDocument(fileToBase62, objectName) {
		return this.serverService
			.put('documents/update-document', { file: fileToBase62, key: objectName })
			.then((data) => data.data || null);
	}

	setCertifyDocuments(params) {
		return this.serverService.put('documents/certify-document', params);
	}
}

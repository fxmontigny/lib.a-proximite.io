import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private _http: HttpClient) {}

	consoleResult(val) {
		return val;
	}

	/* HTTPs request */
	get(url, options = {}): Promise<any> {
		return this._http.get(url, options).toPromise().then(this.consoleResult);
	}

	post(url, params = {}, options = {}): Promise<any> {
		return this._http.post(url, params, options).toPromise().then(this.consoleResult);
	}

	put(url, params = {}, options = {}): Promise<any> {
		return this._http.put(url, params, options).toPromise().then(this.consoleResult);
	}

	delete(url, options = {}): Promise<any> {
		return this._http.delete(url, options).toPromise();
	}
}

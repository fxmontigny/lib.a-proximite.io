import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthMe implements CanActivate, CanActivateChild {
	constructor(private authService: AuthService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		const url: string = state.url;

		return this.checkLogin(url);
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(route, state);
	}

	async checkLogin(url: string) {
		if (environment.isAdminEnv) {
			if (await this.authService.userAdminConnected()) {
				return true;
			}
		} else {
			if (await this.authService.userConnected()) {
				return true;
			}
		}

		return true;
	}
}

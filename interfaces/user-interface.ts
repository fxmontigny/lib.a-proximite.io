import { EnterpriseInterface } from "./enterprise-interface";

export interface UserInterface {
	email?: string;
	id?: number;
	role?: number;
	roleTitle?: string;
	status?: number;
	first_name?: string;
	firstName?: string;
	last_name?: string;
	lastName?: string;
	gender?: string;
	bornDate?: Date;
	photo?: string;
	phone?: string;
	password?: string;
	public_token?: string;
	publicToken?: string;
	newsletterRestaurant?: boolean;
	newsletter?: boolean;
	enterprise?: EnterpriseInterface;
}

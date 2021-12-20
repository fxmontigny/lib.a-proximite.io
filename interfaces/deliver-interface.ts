import { UserInterface } from './user-interface'

export interface DeliverProfilInterface {
	id?: number;
	user_id?: number;
	identity_number?: string;
	deliver_status?: number;
	status?: number;
	deliver_way?: string;
	deliver_zone?: string;
	photo?: string;
	siret?: string;
	vat_number?: string;
	vat_pecent?: number;
	photo_identity?: string;
	photo_identity_verso?: string;
	photo_home_address?: string;
	full_address?: string;
	rejection_reason?: string;
	'user.first_name'?: string;
	'user.last_name'?: string;
	'user.email'?: string;
	'user.phone'?: string;
	user?: UserInterface;
	rib?: string;
	bic?: string;
	kbis?: string;
	paygreenId?: number;
	paygreenError?: string;
}

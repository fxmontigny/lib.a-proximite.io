export interface EnterpriseInterface {
  id?: number;
  name?: string;
  siret?: string;
  vat?: string;
  rib?: string;
  bic?: string;
  fullAddress?: string;
  addressNumber?: string;
  addressStreetName?: string;
  addressPostalCode?: string;
  addressCityName?: string;
  longitude?: number;
  latitude?: number;
  googlePlaceId?: string;
  paygreenId?: string;
  paygreenError?: string;
}

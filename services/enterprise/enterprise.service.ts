import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  constructor (private serverService: ServerService) {}

  getDetails (enterpriseId: number) {
    return this.serverService
      .get('enterprises/get-details/' + enterpriseId)
      .then((data) => data.data || null)
  }

  getAdminDetails (enterpriseId: number) {
    return this.serverService
      .get('enterprises/get-admin-details/' + enterpriseId)
      .then((data) => data.data || null)
  }

  updateDetails (params) {
    return this.serverService
      .put('enterprises/update-details', params)
      .then((data) => data.data || null)
  }

  getEnterprises () {
    return this.serverService
      .get('enterprises/list')
      .then((data) => data.data || [])
  }
}

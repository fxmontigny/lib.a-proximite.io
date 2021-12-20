import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor (private serverService: ServerService) {}

  getPartnerList () {
    return this.serverService
      .get('partners/get-all-partners')
      .then((data) => data.data || [])
  }

  deletePartner (partnerId: number) {
    return this.serverService
      .delete(`partners/remove-partner/${partnerId}`)
  }

  preloadPartnerEdit () {
    return this.serverService
      .get('partners/preload-partner-edit')
      .then((data) => data.data || null)
  }

  createPartner (params) {
    return this.serverService
      .post('partners/create-partner', params)
  }

  getMyPartnerships() {
    return this.serverService
      .get('partners/get-my-partnerships')
      .then((data) => data.data || [])
  }
}

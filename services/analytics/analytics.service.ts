import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor (private serverService: ServerService) {}

  getGetMontlyCA (restaurantId) {
    return this.serverService.get('analytics/get-preview-ca/' + restaurantId).then((data) => data.data || [])
  }

  getTopSelling (restaurantId) {
    return this.serverService.get('analytics/top-selling/' + restaurantId).then((data) => data.data || [])
  }

  getDailySelling () {
    return this.serverService.get('analytics/get-daily-selling').then((data) => data.data || [])
  }
}

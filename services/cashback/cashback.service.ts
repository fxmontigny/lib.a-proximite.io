import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class CashbackService {
  constructor(private serverService: ServerService) {}

  getCashbackRestaurant(restaurantId: number) {
    return this.serverService
      .get('cashback/get-cashback-restaurant/' + restaurantId)
      .then((data) => data.data || [])
  }

  updateCashback(params) {
    return this.serverService
      .put('cashback/update-cashback', params)
  }

  deleteCashback(backId: number) {
    return this.serverService
      .delete('cashback/delete-cashback/' + backId)
  }
}

import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class DiscountcodeService {
  constructor(private serverService: ServerService) {}

  getDiscountRestaurant(restaurantId: number) {
    return this.serverService
      .get('discountcodes/get-discount-restaurant/' + restaurantId)
      .then((data) => data.data || [])
  }

  updateCode(params) {
    return this.serverService
      .put('discountcodes/update-code', params)
  }

  deleteCode(codeId: number) {
    return this.serverService
      .delete('discountcodes/delete-coupon/' + codeId)
  }
}

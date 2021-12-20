import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor (
    private serverService: ServerService
  ) {}

  getMonthlyCA () {
    return this.serverService
      .get('admin/get-monthly-ca')
      .then((data) => data.data || [])
  }

  getWaitingPayments () {
    return this.serverService
      .get('admin/get-waiting-payments')
      .then((data) => data.data || [])
  }
}

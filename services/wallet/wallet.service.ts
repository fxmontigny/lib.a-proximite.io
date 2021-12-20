import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor (private serverService: ServerService) {}

  getMyWallets () {
    return this.serverService
      .get('wallets/get-my-wallets')
      .then((data) => data.data || [])
  }
}

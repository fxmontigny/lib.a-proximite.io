import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor (private serverService: ServerService) { }

  getAllPositions () {
    return this.serverService
      .get('notifications/get-all-position')
      .then((data) => data.data || [])
  }
}

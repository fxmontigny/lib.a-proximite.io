import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor (private serverService: ServerService) {}

  getPage (pageId) {
    return this.serverService
      .get('pages/get-page/' + pageId)
      .then((data) => data.data || null)
  }

  getAllPage () {
    return this.serverService
      .get('pages/get-all')
      .then((data) => data.data || [])
  }

  getPageDetails (pageId) {
    return this.serverService
      .get('pages/get-page-details/' + pageId)
      .then((data) => data.data || null)
  }

  adminUpdatePage (params) {
    return this.serverService
      .put('pages/admin-update-page', params)
      .then((data) => data.data || null)
  }
}

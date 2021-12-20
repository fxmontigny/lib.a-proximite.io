import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class ReleaseNotesService {
  constructor (private serverService: ServerService) {}

  getAllNotes () {
    return this.serverService
      .get('release-notes/get-all')
      .then((data) => data.data || [])
  }

  /* getPage (pageId) {
    return this.serverService
      .get('pages/get-page/' + pageId)
      .then((data) => data.data || null)
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
  } */
}

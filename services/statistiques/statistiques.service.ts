import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class StatistiquesService {  
  constructor (private serverService: ServerService) {}

  addStat (params) {
	  return this.serverService
	    .post('statistiques/sent', params)
  }

  getTypes (types) {
    return this.serverService
		  .post('statistiques/get-types', { types })
		  .then((data) => data.data || [])
  }
}

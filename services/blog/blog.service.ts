import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor (private serverService: ServerService) {}

  getAllBlogs () {
    return this.serverService
      .get('blog/get-all')
      .then((data) => data.data || [])
  }

  getBlog (blogId) {
    return this.serverService
      .get('blog/get-blog/' + blogId)
      .then((data) => data.data || null)
  }

  getBlogDetails (blogId) {
    return this.serverService
      .get('blog/get-blog-details/' + blogId)
      .then((data) => data.data || null)
  }

  adminUpdateBlog (params) {
    return this.serverService
      .put('blog/admin-update-blog', params)
      .then((data) => data.data || null)
  }

  getPublicAll () {
    return this.serverService
      .get('blog/get-all-public')
      .then((data) => data.data || [])
  }

  getArticle (blogId) {
    return this.serverService
      .get('blog/show/' + blogId)
      .then((data) => data.data || null)
  }
}

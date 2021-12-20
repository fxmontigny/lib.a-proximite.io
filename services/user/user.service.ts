import { Injectable } from '@angular/core'
import { UserInterface } from 'lib/interfaces/user-interface'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ServerService } from '../http-server/server.service'
import { RestaurantService } from '../restaurant/restaurant.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  user: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);
  position: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor (
    private serverService: ServerService,
    private restaurantService: RestaurantService
  ) {
    this.token.subscribe((token) => {
      console.log('TOKEN', token)
      this.updateNotificationsToken()
    })
    this.position.subscribe(() => {
      this.updateNotificationsToken()
    })
  }

  setUser (user) {
    this.user.next(user)

    if (user && user.token) {
      this.serverService.setToken(user.token)
    }
  }

  me () {
    return this.serverService.get('users/me').then((data) => data.data || null)
  }

  updateMe (params) {
    return this.serverService
      .put('users/update-me', params)
      .then((data) => data.data || null)
  }

  updatePasswordMe (params) {
    return this.serverService
      .put('users/update-password-me', params)
      .then((data) => data.data || null)
  }

  updateAccount (params) {
    return this.serverService
      .put('users/update-account', params)
      .then((data) => {
        return data
      })
  }

  createAccount (params: UserInterface, saveToken = true) {
    return this.serverService
      .post('users/create-account', params)
      .then((data) => {
        if(saveToken) {
          this.serverService.setToken(data.token)
        }
        return true
      })
  }

  getUsers () {
    return this.serverService.get('users/list').then((data) => data.data || [])
  }

  getCustomers () {
    return this.serverService
      .get('users/list-customers-only')
      .then((data) => data.data || [])
  }

  getUser (id) {
    return this.serverService
      .get('users/get/' + id)
      .then((data) => data.data || null)
  }

  mobileCreation (phone) {
    return this.serverService
      .post('users/mobile-creation', { phone })
      .then((data) => data.data || null)
  }

  mobileValidation (phone, code) {
    return this.serverService
      .post('users/mobile-validation', { phone, code })
      .then((data) => data.data || null)
  }

  accountForgotPassword (contact) {
    return this.serverService
      .put('users/forgot-password', { contact })
      .then((data) => data.data || null)
  }

  lightForgotPassword (params) {
    return this.serverService
      .put('users/light-forgot-password', params)
      .then((data) => data.data || null)
  }

  logout () {
    return this.serverService.get('auths/logout').then(() => {
      this.restaurantService.restaurants.next([])
      this.restaurantService.restaurant.next(null)
      this.user.next(null)
      this.serverService.removeToken()
    })
  }

  userDetails () {
    return this.serverService
      .get('users/account-details')
      .then((data) => data.data || null)
  }

  updateUserDetails (params) {
    return this.serverService.put('users/update-account-details', params)
  }

  updateNotificationsToken () {
    const token = this.token.getValue()
    if (!token) {
      return
    }
    const position = this.position.getValue()
    const latitude = position && position.latitude ? position.latitude : null
    const longitude =
      position && position.longitude ? position.longitude : null

    return this.serverService.postWithoutError('notifications/update', {
      token,
      type: environment.tokenType,
      latitude,
      longitude,
    })
  }

  updateNotificationsTokenEnable (status) {
    const token = this.token.getValue()
    if (!token) {
      return
    }

    return this.serverService.postWithoutError('notifications/update-enable', {
      token,
      notifiable: status ? 1 : 0,
    })
  }

  getNoficiationStatus () {
    return this.serverService.get(`notifications/notification-status/${this.token.getValue()}`).then((data) => data.data)
  }

  removeNotificationsToken (token) {
    return this.serverService.post('notifications/remove', { token })
  }

  addForcePosition (alert = true) {
    return new Promise((resolve, reject) => {
      reject('No device')
    })
  }

  unsubsribeRestaurantUpdate(token) {
    return this.serverService.put('users/unsubscribe-restaurant-update', { token })
  }
}

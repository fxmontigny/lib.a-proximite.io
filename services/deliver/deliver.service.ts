import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class DeliverService {
  constructor(private serverService: ServerService) {}

  getOrderDetails(id: number) {
    return this.serverService
      .get('delivers/get-order-details/' + id)
      .then((data) => data.data)
  }

  getMyOrders() {
    return this.serverService
      .get('delivers/get-my-orders')
      .then((data) => data.data || [])
  }

  getStatus() {
    return this.serverService
      .get('delivers/get-account-status')
      .then((data) => data.data)
  }

  getDetailStatus() {
    return this.serverService
      .get('delivers/get-account-detail-status')
      .then((data) => data.data)
  }

  getProfil() {
    return this.serverService
      .get('delivers/get-account-profil')
      .then((data) => data.data)
  }

  updateProfil(params) {
    return this.serverService
      .put('delivers/update-account-profil', params)
      .then((data) => data.data)
  }

  getDelivers() {
    return this.serverService
      .get('delivers/get-list')
      .then((data) => data.data || [])
  }

  getAdminDetail(id) {
    return this.serverService
      .get('delivers/get-admin-details/' + id)
      .then((data) => data.data)
  }

  adminUpdateProfilStatus(params) {
    return this.serverService
      .put('delivers/admin-update-account-profil', params)
      .then((data) => data.data)
  }

  iAmReady() {
    return this.serverService
      .put('delivers/i-am-ready')
      .then((data) => data.data)
  }

  iAmFinish() {
    return this.serverService
      .put('delivers/i-am-finish')
      .then((data) => data.data)
  }

  getDeliverZones() {
    return this.serverService
      .get('delivers/get-zones')
      .then((data) => data.data || [])
  }

  getLabelDeliverZones() {
    return this.serverService
      .get('delivers/get-label-zones')
      .then((data) => data.data || [])
  }

  updatePosition(latitude: number, longitude: number) {
    return this.serverService.put('delivers/update-position', {
      latitude,
      longitude,
    })
  }

  getOrdersToCatch() {
    return this.serverService
      .get('delivers/get-orders-to-catch')
      .then((data) => data.data || [])
  }

  checkDeliveryStatus() {
    return this.serverService
      .get('delivers/check-delivery-status')
      .then((data) => data.data)
  }

  onDeliveryIsDone(orderId: number) {
    return this.serverService
      .post('delivers/delivery-is-done', { orderId })
      .then((data) => data.data)
  }

  onDeliveryIsDoneWithCode(orderId: number, code: string) {
    return this.serverService
      .post('delivers/delivery-is-done-with-code', { orderId, code })
      .then((data) => data.data)
  }

  acceptOrder(orderId: number) {
    return this.serverService
      .post('delivers/accept-order', { orderId })
      .then((data) => data.data)
  }

  watchOrders() {
    let observable: Observable<any>
    let intId

    observable = new Observable((observer) => {
      const callback = () => {
        this.getOrdersToCatch()
          .then((l) => {
            observer.next(l)

            intId = setTimeout(() => {
              callback()
            }, 120000)
          })
          .catch(() => {
            intId = setTimeout(() => {
              callback()
            }, 60000)
          })
      }

      callback()

      return () => {
        //This function is called when observer unsubscribes
        if (intId) {
          clearTimeout(intId)
        }
      }
    })

    return observable
  }

  getAllPositions() {
    return this.serverService
      .get('delivers/get-all-positions')
      .then((data) => data.data || [])
  }

  onDeliveryCancelOrder(orderId: number, reason: string) {
    return this.serverService
      .put('delivers/delivery-cancel-order', { orderId, reason })
      .then((data) => data.data)
  }
}

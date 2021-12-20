import { ORDER_STATUS, ORDER_STATUS_LABEL } from 'lib/constants/orders'
import { Subscription } from 'rxjs'
import { sumBy } from 'lodash'
import {
  RESTAURANT_FOOD_STATUS,
  RESTAURANT_FOOD_STATUS_LABEL,
  RESTAURANT_STATUS,
  RESTAURANT_TYPE_LABEL,
} from 'lib/constants/restaurants'
import { environment } from 'src/environments/environment'
import { FOOD_STATUS, FOOD_STATUS_LABEL } from 'lib/constants/foodStatus'
import { DOCUMENTS_LABEL } from 'lib/constants/documents'
import {
  DELIVER_DEPARTEMENT,
  DELIVER_DEPARTEMENT_LABEL,
  DELIVER_STATUS,
  DELIVER_STATUS_LABEL,
  DELIVER_WAY,
  DELIVER_WAY_LABEL,
} from 'lib/constants/delivers'
import { BOOKING_STATUS, BOOKING_STATUS_LABEL } from 'lib/constants/booking'
import {
  FOOD_CATEGORY_TYPE,
  FOOD_CATEGORY_TYPE_LABEL,
} from 'lib/constants/foodTypes'
import { BLOG_STATUS, BLOG_STATUS_LABEL } from 'lib/constants/blog'

export class MainClass {
  watcherList: Subscription[] = [];
  public ORDER_STATUS = ORDER_STATUS;
  public ORDER_STATUS_LABEL = ORDER_STATUS_LABEL;
  public RESTAURANT_STATUS = RESTAURANT_STATUS;
  public FOOD_STATUS = FOOD_STATUS;
  public FOOD_STATUS_LABEL = FOOD_STATUS_LABEL;
  public RESTAURANT_FOOD_STATUS = RESTAURANT_FOOD_STATUS;
  public RESTAURANT_FOOD_STATUS_LABEL = RESTAURANT_FOOD_STATUS_LABEL;
  public RESTAURANT_TYPE_LABEL = RESTAURANT_TYPE_LABEL;
  public DOCUMENTS_LABEL = DOCUMENTS_LABEL;
  public DELIVER_STATUS = DELIVER_STATUS;
  public DELIVER_STATUS_LABEL = DELIVER_STATUS_LABEL;
  public DELIVER_WAY = DELIVER_WAY;
  public DELIVER_WAY_LABEL = DELIVER_WAY_LABEL;
  public DELIVER_DEPARTEMENT = DELIVER_DEPARTEMENT;
  public DELIVER_DEPARTEMENT_LABEL = DELIVER_DEPARTEMENT_LABEL;
  public BOOKING_STATUS = BOOKING_STATUS;
  public BOOKING_STATUS_LABEL = BOOKING_STATUS_LABEL;
  public FOOD_CATEGORY_TYPE = FOOD_CATEGORY_TYPE;
  public FOOD_CATEGORY_TYPE_LABEL = FOOD_CATEGORY_TYPE_LABEL;
  public BLOG_STATUS_LABEL = BLOG_STATUS_LABEL;
  public BLOG_STATUS = BLOG_STATUS;
  public environment = environment;
  public now = new Date();

  watch (sub) {
    this.watcherList.push(sub)
  }

  watcherDestroy () {
    this.watcherList.map((w) => {
      try {
        w.unsubscribe()
      } catch (err) {}
    })
  }

  trackBy (key) {
    return function (index, value) {
      return value[key]
    }
  }

  public convertPriceToDollars (price) {
    if (price > 30) {
      return '€€€'
    }

    if (price > 10) {
      return '€€'
    }

    return '€'
  }

  public convertNoteToText (note) {
    if (note >= 4.5) {
      return 'Excellent'
    }

    if (note >= 3.5) {
      return 'Bon'
    }

    return ''
  }
  public orderGetQuantity = (order) => {
    if (order) {
      return sumBy(order.products || [], 'quantity')
    }

    return 0
  };

  public orderGetSumTTC = (order) => {
    let total = 0

    if (order) {
      (order.products || []).map((p) => {
        total += p['food.price'] * p.quantity
      })
    }

    return total
  };

  public orderGetTVA = (order) => {
    let total = 0

    if (order) {
      (order.products || []).map((p) => {
        const price = p['food.price'] * p.quantity
        total += price * (p['food.tva'] / 100)
      })
    }

    return total
  };

  public orderGetHT = (order) => {
    let total = 0

    if (order) {
      (order.products || []).map((p) => {
        const price = p['food.price'] * p.quantity
        total += price * ((100 - p['food.tva']) / 100)
      })
    }

    return total
  };

  public dayName = (date) => {
    if (typeof date === 'string') {
      date = new Date(date)
    }

    switch (date.getDay()) {
    case 1:
      return 'lundi'
    case 2:
      return 'mardi'
    case 3:
      return 'mercredi'
    case 4:
      return 'jeudi'
    case 5:
      return 'vendredi'
    case 6:
      return 'samedi'
    case 0:
      return 'dimanche'
    }
  };

  public monthName = (date) => {
    if (typeof date === 'string') {
      date = new Date(date)
    }
	
    switch (date.getMonth()) {
    case 0:
      return 'janvier'
    case 1:
      return 'février'
    case 2:
      return 'mars'
    case 3:
      return 'avril'
    case 4:
      return 'mai'
    case 5:
      return 'juin'
    case 6:
      return 'juillet'
    case 7:
      return 'aout'
    case 8:
      return 'septembre'
    case 9:
      return 'octobre'
    case 10:
      return 'novembre'
    case 11:
      return 'décembre'
    }
  };

  public getStringDistance (distanceInKm) {
    if (distanceInKm > 1) {
      return Math.round(distanceInKm * 100) / 100 + ' km.'
    } else {
      return Math.floor(distanceInKm * 1000) + ' m.'
    }
  }

  public onCopy (text) {
    const dummy = document.createElement('input')

    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)

    alert('Copié')
  }

  public formatPhone (phone) {
    if(phone) {
      phone = phone.replace(/\+33/g, "0");
    }

    return phone
  }

  public ngModelCompareDate (a: Date, b: Date) {
    return a.toString() == b.toString()
  }
}

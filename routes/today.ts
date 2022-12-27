import { Router } from 'express'
import CurrencyService from '../servcies/currency'
import CurrencyHandler from '../handlers/currencyHandler'
class TodayRoute {
  private service: CurrencyService
  constructor(srv: CurrencyService, router: Router) {
    this.service = srv
    const currencyHandler = new CurrencyHandler(this.service)
    router.get('/day/today.json', currencyHandler.todayHandler.bind(this))
  }
}

export default TodayRoute

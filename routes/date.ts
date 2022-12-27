import { Router } from 'express'
import CurrencyService from '../servcies/currency'
import CurrencyHandler from '../handlers/currencyHandler'

class DateRoute {
  private service: CurrencyService
  constructor(srv: CurrencyService, router: Router) {
    this.service = srv
    const currencyHandler = new CurrencyHandler(this.service)
    router.get('/date/:id.json', currencyHandler.dateHandler.bind(this))
  }
}
export default DateRoute

import { Router } from 'express'
import CurrencyService from '../servcies/currency'
import CurrencyHandler from '../handlers/currencyHandler'
class MonthRoute {
  private service: CurrencyService
  constructor(srv: CurrencyService, router: Router) {
    this.service = srv
    const currencyHandler = new CurrencyHandler(this.service)
    router.get('/month/:id.json', currencyHandler.monthHandler.bind(this))
  }
}
export default MonthRoute

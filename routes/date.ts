import CurrencyHandler from "../handlers/currencyHandler";
import CurrencyService from "../servcies/currency"
import {Router} from 'express'
class DateRoute {
    private service:CurrencyService;
    constructor(srv: CurrencyService, router: Router) {
        this.service = srv;
        const currencyHandler = new CurrencyHandler(this.service)
        console.log("dateRoute: ", currencyHandler)
        router.get('/date/:id.json', currencyHandler.dateHandler.bind(this))
    }
}
export default DateRoute


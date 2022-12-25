import CurrencyHandler from "../handlers/currencyHandler";
import CurrencyService from "../servcies/currency";
import { Router } from "express";
class MonthRoute {
    private service: CurrencyService;
    constructor(srv: CurrencyService, router: Router) {
        this.service = srv;
        const currencyHandler = new CurrencyHandler(this.service);
        router.get('/month/:id.json', currencyHandler.monthHandler)
    }
}
export default MonthRoute
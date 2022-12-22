import CurrencyHandler from "../handlers/todayHandler";
import CurrencyService from "../servcies/currency";
import {Router} from "express"
class TodayRoute {
    private service:CurrencyService
    constructor(srv:CurrencyService, router: Router) {
        this.service = srv
        const currencyHandler = new CurrencyHandler(this.service);
        router.get("/day/today.json",currencyHandler.todayHandler)
    }
}




export default TodayRoute;

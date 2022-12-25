import CurrencyHandler from "../handlers/currencyHandler";
import CurrencyService from "../servcies/currency";
import {Router} from "express"
class TodayRoute {
    private service:CurrencyService
    constructor(srv:CurrencyService, router: Router) {
        this.service = srv
        const currencyHandler = new CurrencyHandler(this.service);
        console.log("currency handler in route: ", currencyHandler)
        router.get("/day/today.json",currencyHandler.todayHandler)
    }
}




export default TodayRoute;

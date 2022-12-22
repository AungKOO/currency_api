import { Client } from "pg";

class CurrencyService {
  private connection: Client = null;
  constructor(con: Client) {
    this.connection = con;
  }
  getTodayData() {
    // todo: get today data logic
  }
  getMonthlyData() {
    //todo: get month data logic
  }
}

export default CurrencyService;

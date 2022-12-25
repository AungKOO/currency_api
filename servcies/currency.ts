import { Client } from "pg";

class CurrencyService {
  private connection: Client = null;
  constructor(con: Client) {
    this.connection = con;
    // console.log("service constructor ", this.connection)
  }
  getTodayData() {
    // todo: get today data logic

    const today: String = new Date().toISOString().substring(0, 10); // get date format 2022-12-25
    this.connection
      .query(`SELECT * FROM c.currencies WHERE DATE(date) = '${today}'`)
      .then((data) => console.log(data.rows[0].currency));
  }
  getMonthlyData(id: String) {
    try {
      const month: String = id.substring(4, 6); // 202212 -> 12
      this.connection
        .query(
          `SELECT * FROM c.currencies WHERE EXTRACT(MONTH from date) = '${month}'`
        )
        .then((data) => console.log(data.rows));
    } catch (e) {
      console.log(e)
      // return []
    }
  }
}

export default CurrencyService;

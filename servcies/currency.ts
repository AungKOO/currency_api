import { Client } from 'pg'

class CurrencyService {
  private connection: Client = null
  constructor(con: Client) {
    this.connection = con
  }
  getTodayData() {
    const today: String = new Date().toISOString().substring(0, 10) // get date format 2022-12-25
    this.connection
      .query(`SELECT * FROM currencies WHERE DATE(date) = '${today}'`)
      .then((data) => console.log(data.rows[0].currency))
  }
  getMonthlyData(id: String) {
    try {
      const month: String = id.substring(4, 6) // 202212 -> 12
      this.connection
        .query(
          `SELECT * FROM currencies WHERE EXTRACT(MONTH from date) = '${month}'`
        )
        .then((data) => console.log(data.rows))
    } catch (e) {
      console.log(e)
      // return []
    }
  }
  getspecificDateData(id: String) {
    try {
      const date: String =
        id.substring(0, 4) + '-' + id.substring(4, 6) + '-' + id.substring(6, 8)
      this.connection
        .query(`SELECT * FROM currencies WHERE DATE(date) = '${date}'`)
        .then((data) => console.log(data.rows))
    } catch (e) {
      console.error(e)
    }
  }
}

export default CurrencyService

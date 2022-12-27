import { Client } from 'pg'

class CurrencyService {
  private connection: Client = null
  constructor(con: Client) {
    this.connection = con
  }
  getTodayData(): Promise<any> {
    try {
      const today: String = new Date().toISOString().substring(0, 10) // get date format 2022-12-25
      return this.connection.query(
        `SELECT date, currency FROM currencies WHERE DATE(date) = '${today}'`
      )
    } catch (e) {
      console.error(e)
      return Promise.reject([])
    }
  }
  getMonthlyData(id: String): Promise<any> {
    try {
      const month: String = id.substring(4, 6) // 202212 -> 12
      return this.connection.query(
        `SELECT date,currency FROM currencies WHERE EXTRACT(MONTH from date) = '${month}'`
      )
    } catch (e) {
      console.error(e)
      return Promise.reject([])
    }
  }
  getspecificDateData(id: String): Promise<any> {
    try {
      const date: String =
        id.substring(0, 4) + '-' + id.substring(4, 6) + '-' + id.substring(6, 8)
      return this.connection.query(
        `SELECT date, currency FROM currencies WHERE DATE(date) = '${date}'`
      )
    } catch (e) {
      console.error(e)
      return Promise.reject([])
    }
  }
}

export default CurrencyService

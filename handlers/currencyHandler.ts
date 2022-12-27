import CurrencyService from '../servcies/currency'
class CurrencyHandler {
  private service: CurrencyService

  constructor(sevc: CurrencyService) {
    this.service = sevc
  }

  async todayHandler(req: any, res: any) {
    try {
      let data = await this.service.getTodayData()
      let result = data.rows
      return res.status(200).json(result)
    } catch (err) {
      console.error(err)
      return res.sendStatus(400)
    }
  }
  async monthHandler(req: any, res: any) {
    try {
      const id: String = req.params.id
      let data = await this.service.getMonthlyData(id)
      let result = data.rows
      return res.status(200).json(result)
    } catch (e) {
      console.error(e)
      return res.sendStatus(400)
    }
  }

  async dateHandler(req: any, res: any) {
    try {
      const id = req.params.id
      let data = await this.service.getspecificDateData(id)
      const result = data.rows
      return res.status(200).json(result)
    } catch (e) {
      console.error(e)
      return res.sendStatus(400)
    }
  }
}
export default CurrencyHandler

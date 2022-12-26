import CurrencyService from '../servcies/currency'
class CurrencyHandler {
  private service: CurrencyService

  constructor(sevc: CurrencyService) {
    this.service = sevc
  }

  todayHandler(req: any, res: any) {
    try {
      this.service.getTodayData()
      return res.status(200).json('hello')
    } catch (err) {
      console.error(err)
      return res.sendStatus(400)
    }
  }
  monthHandler(req: any, res: any) {
    const id = req.params.id
    console.log(req.params.id)
    console.log(this)
    return res.status(200).json(id)
  }
  dateHandler(req: any, res: any) {
    const id = req.params.id
    this.service.getspecificDateData(id)
    return res.status(200).json(id)
  }
}
export default CurrencyHandler

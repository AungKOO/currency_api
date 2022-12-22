import CurrencyService from "../servcies/currency";
class CurrencyHandler {
  private service: CurrencyService;

  constructor(sevc: CurrencyService) {
    this.service = sevc;
  }

  async todayHandler(req:any, res:any) {
    // console.log(req.params.id);
    // const id = req.params.id;
    try {
      // let data = await getMonthlyRate();

      return res.status(200).json("hello");
    } catch (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  }
}
export default CurrencyHandler;

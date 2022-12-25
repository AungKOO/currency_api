import CurrencyService from "../servcies/currency";
class CurrencyHandler {
  private service: CurrencyService;

  constructor(sevc: CurrencyService) {
    this.service = sevc;
    console.log("constructor in handler ", this.service);
  }

  todayHandler(req: any, res: any) {
    console.log(this)
    try {

      console.log("It entered the todayHandler");
      console.log(this);

      return res.status(200).json("hello");
    } catch (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  }
  monthHandler(req: any, res:any) {
    const id = req.params.id;
    console.log(req.params.id);
    console.log(this)
    return res.status(200).json(id)

  }
}
export default CurrencyHandler;

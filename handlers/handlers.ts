// todo: import logic or something else

import getTodayCurrencies from "../servcies/today";

let getAllCurrencies = async (req: any, res: any) => {
  console.log(req.body)
  let data:any = await getTodayCurrencies()
  console.log("It reached the route")
return res.status(200).json(data);
};
export default getAllCurrencies;

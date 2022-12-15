// todo: import logic or something else

import getTodayRate from "../servcies/today";


let getAllCurrencies = async (req: any, res: any) => {   // * get today all currencies rate
  console.log(req.body)
  let data:any = await getTodayRate()
  console.log("It reached the handlers")
return res.status(200).json(data);
};


export default getAllCurrencies;

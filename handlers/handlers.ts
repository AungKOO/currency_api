// todo: import logic or something else

const data = {
  currencies: [{ rate: 2980, currency_format: "USD" }],
  yearMonth: "2022/12",
  day: "14",
};

let getAllCurrencies = (req: any, res: any) => {
  console.log(req.body)
  console.log("It reached the route")
return res.status(200).json(data);
};
export default getAllCurrencies;

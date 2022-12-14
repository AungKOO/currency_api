// todo: import logic or something else
const express = require("express");
const router = express.Router();
const data = {
  currencies: [{ rate: 2980, currency_format: "USD" }],
  yearMonth: "2022/12",
  day: "14",
};

router.get("/day/today.json", (req, res: any) => {
  return res.status(200).json(data);
});

export default router;
import getAllCurrencies from "../handlers/todayHandler";

const router = require("express").Router();


router.get("/day/today.json", getAllCurrencies);

export default router;

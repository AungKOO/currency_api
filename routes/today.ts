import getAllCurrencies from "../handlers/handlers";

const router = require("express").Router();


router.get("/day/today.json", getAllCurrencies);

export default router;

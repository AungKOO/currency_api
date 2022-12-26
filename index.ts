import express from 'express'
import bodyParser from 'body-parser'
import today from "./routes/today";
import month from "./routes/month";
import client from "./db"
import CurrencyService from './servcies/currency';
import TodayRoute from './routes/today';
import MonthRoute from './routes/month';
import DateRoute from './routes/date';

const app = express()
const router = express.Router();

client.connect().then(() => console.log("connected"))
const currencyService = new CurrencyService(client)
// currencyService.getTodayData()
// currencyService.getMonthlyData('202209')
// currencyService.getspecificDateData('20221224')
const todayRoute = new TodayRoute(currencyService, router);
const monthRoute = new MonthRoute(currencyService, router)
const dateRoute = new DateRoute(currencyService, router)

app.use(bodyParser.json())
app.use("/api/v1", router)


export default app;

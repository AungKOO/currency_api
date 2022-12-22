import express from 'express'
import bodyParser from 'body-parser'
import today from "./routes/today";
import month from "./routes/month";
import client from "./db"
import CurrencyService from './servcies/currency';
import TodayRoute from './routes/today';

const app = express()
const router = express.Router();

client.connect().then(() => console.log("connected"))
const currencyService = new CurrencyService(client)
const todayRoute = new TodayRoute(currencyService, router);


app.use(bodyParser.json())
app.use("/api/v1", router)
app.use("/api/v1", month)


export default app;

import express from 'express'
import bodyParser from 'body-parser'
import client from './db'
import CurrencyService from './servcies/currency'
import TodayRoute from './routes/today'
import MonthRoute from './routes/month'
import DateRoute from './routes/date'

const app = express()
const router = express.Router()

client.connect().then(() => console.log('connected'))
const currencyService = new CurrencyService(client)
const todayRoute = new TodayRoute(currencyService, router)
const monthRoute = new MonthRoute(currencyService, router)
const dateRoute = new DateRoute(currencyService, router)

app.use(bodyParser.json())
app.use('/api/v1', router)

export default app

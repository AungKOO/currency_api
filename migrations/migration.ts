const fs = require('fs')
const { Client } = require('pg')
require('dotenv').config()
const fsPromises = fs.promises

const client = new Client({
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT) || '5432',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'hiworld',
  database: process.env.DB_NAME || 'exchange_rate'
})

async function readSQL(file: String) {
  let data = await fsPromises.readFile(file)
  return data.toString()
}
;(async (dbClient) => {
  const tableName: String = await readSQL('migrations/currencies.sql')
  const uuidFunc: String = await readSQL('migrations/function.sql')
  const insertQuery: String = await readSQL('migrations/query.sql')

  dbClient.connect()
  await dbClient.query(uuidFunc)
  await dbClient.query(tableName)
  await dbClient.query(insertQuery) 
  dbClient.end()
  console.log('success') // check database connection, query and con close
})(client)

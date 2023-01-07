const fs = require('fs');
const {Client} = require('pg');
const {parse} = require('csv-parse')
require("dotenv").config();
const fsPromises = fs.promises;
const { config } = require('dotenv');
const client = new Client({
    host: process.env.DB_HOST || "postgres",
    port: Number(process.env.DB_PORT) || "5432",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "hiworld",
    database: process.env.DB_NAME || "exchange_rate"
  });


  fs.createReadStream("seeds/migration_data.csv")
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      console.log(row);
    })
    .on("end", function () {
      console.log("finished");
    })
    .on("error", function (error) {
      console.log(error.message);
    });




    // COPY currencies FROM '/Users/aungko/test.csv' DELIMITER ',' CSV HEADER; 
    // INSERT INTO ???
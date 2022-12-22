import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "hiworld",
  database: "exchange_rate",
});

export default client;



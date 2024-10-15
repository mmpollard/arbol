import { Application } from "oak";
import { Client } from "deno_postgres";

const app = new Application();
const client = new Client({
  user: "your_username",
  password: "your_password",
  database: "your_database",
  hostname: "localhost",
  port: 5432,
});

await client.connect();

app.use(async (ctx) => {
  const result = await client.queryObject("SELECT * FROM your_table;");
  ctx.response.body = result;
});

app.listen({ port: 8000 });
console.log("Server is running on http://localhost:8000");

const fs = require("node:fs");
const getConn = require("./database");

async function migrate() {
  const db = await getConn();

  const data = fs.readFileSync("./init.sql", "utf8");
  await db.exec(data);

  await db.close();
}

migrate();

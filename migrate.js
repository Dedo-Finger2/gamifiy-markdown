const getConn = require("./database");

function migrate() {
  const data = fs.readFileSync("./init.sql", "utf8");
  getConn().exec(data);
}

migrate();

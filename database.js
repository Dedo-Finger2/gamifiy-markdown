const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

async function getConn() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

module.exports = getConn;

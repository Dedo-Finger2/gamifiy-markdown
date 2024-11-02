const sqlite3 = require("sqlite3").verbose();
const databasePath = "./database.db";
const fs = require("node:fs");

function getConn() {
  const db = new sqlite3.Database(databasePath, (error) => {
    if (error) {
      return console.error(error.message);
    }
  });

  return db;
}

module.exports = getConn;

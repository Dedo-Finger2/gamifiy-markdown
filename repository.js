const getConn = require("./database");
const crypto = require("node:crypto");

async function insertMainFolderPath(path) {
  const db = await getConn();

  const newMainFolderData = {
    id: randomUUID(),
    path,
    coins: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.run(
    `INSERT INTO main_folders (id, path, coins, created_at, updated_at) VALUES (?,?,?,?,?)`,
    [
      newMainFolderData.id,
      newMainFolderData.path,
      newMainFolderData.coins,
      newMainFolderData.createdAt,
      newMainFolderData.updatedAt,
    ],
  );

  await db.close();
}

async function getCurrentMainFolderPath() {
  const db = await getConn();

  const mainFolder = await db.get(`SELECT path FROM main_folders`);

  await db.close();

  return mainFolder?.path;
}

async function getAllShopItems() {
  const db = await getConn();

  const items = await db.all(`SELECT * FROM shop_items`);

  await db.close();

  return items;
}

async function createShopItem(data) {
  const db = await getConn();

  const id = crypto.randomUUID();
  const createdAt = new Date();
  const updatedAt = new Date();
  const { name, cost, description, value } = data;

  await db.run(
    `INSERT INTO shop_items (id, name, cost, description, value, created_at, updated_at) VALUES (?,?,?,?,?,?,?)`,
    [id, name, cost, description, value, createdAt, updatedAt],
  );

  await db.close();
}

async function getCoins() {
  const db = await getConn();

  const currentCoins = db.get(`SELECT coins FROM main_folders LIMIT 1`);

  await db.close();

  return currentCoins;
}

module.exports = {
  insertMainFolderPath,
  getCurrentMainFolderPath,
  getAllShopItems,
  createShopItem,
  getCoins,
};

const getConn = require("./database");

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

  return mainFolder.path;
}

module.exports = {
  insertMainFolderPath,
  getCurrentMainFolderPath,
};

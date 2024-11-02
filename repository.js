const getConn = require("./database");

function insertMainFolderPath(path) {
  const newMainFolderData = {
    id: randomUUID(),
    path,
    coins: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  getConn().run(
    `INSERT INTO main_folders (id, path, coins, created_at, updated_at) VALUES (?,?,?,?,?)`,
    [
      newMainFolderData.id,
      newMainFolderData.path,
      newMainFolderData.coins,
      newMainFolderData.createdAt,
      newMainFolderData.updatedAt,
    ],
    (error) => {
      if (error) {
        console.error(error.message);
      }
    },
  );
}

module.exports = insertMainFolderPath;

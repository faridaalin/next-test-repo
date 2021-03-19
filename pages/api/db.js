const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function openDB() {
  const db = await sqlite.open({
    filename: './games.sqlite',
    driver: sqlite3.Database,
  });

  return db;
}

module.exports = openDB;

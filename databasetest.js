const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  try {
    const db = await sqlite.open({
      filename: './games.sqlite',
      driver: sqlite3.Database,
    });
    // run migratiosn to create the table in the DB

    await db.migrate({
      force: 'last',
    });

    const allUsers = await db.all('SELECT * FROM users');
    console.log(allUsers);
  } catch (err) {
    console.log(err);
  }
}

setup();

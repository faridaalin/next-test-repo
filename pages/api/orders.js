// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export default async function getUsers(req, res) {
  try {
    if (req.method === 'GET') {
      const db = await sqlite.open({
        filename: './games.sqlite',
        driver: sqlite3.Database,
      });
      const allOrders = await db.all('SELECT * FROM users');

      res.status(200).json(allOrders);
    }
  } catch (err) {
    console.log(err);
  }
}

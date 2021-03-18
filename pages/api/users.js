// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export default async function users(req, res) {
  try {
    if (req.method === 'GET') {
      const db = await sqlite.open({
        filename: './games.sqlite',
        driver: sqlite3.Database,
      });
      const allUsers = await db.all('SELECT * FROM users');

      res.status(200).json(allUsers);
    }
  } catch (err) {
    console.log(err);
  }

  //   if (req.method === 'PUT') {
  //     // Do something
  //   }
  //   if (req.method === 'POST') {
  //     // Do something
  //   }
  //   if (req.method === 'PATCH') {
  //     // Do something
  //   }
}

const openDb = require('../db');

export default async function users(req, res) {
  try {
    const db = await openDb();
    if (req.method === 'GET') {
      const allUsers = await db.all('SELECT * FROM users');

      res.status(200).json(allUsers);

      db.close();
    }
  } catch (err) {
    console.log(err);
  }
}

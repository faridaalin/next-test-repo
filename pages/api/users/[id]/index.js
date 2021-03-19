const openDb = require('../../db');

export default async function getByUserID(req, res) {
  try {
    let user = {};
    console.log('ID', req.query.id);
    if (req.method === 'GET') {
      const db = await openDb();
      // database query
      user = await db.get('SELECT * FROM users WHERE id = ?', [req.query.id]);
      // return the user
      res.status(200).json(user);
      db.close();
    }
  } catch (error) {
    console.log(error);
  }
}

const openDb = require('../../db');

export default async function getOrdersByUSerID(req, res) {
  if (req.method === 'GET') {
    try {
      let usersOrders = [];
      const db = await openDb();

      usersOrders = await db.all('SELECT * FROM orders WHERE userID = ?', [
        req.query.id,
      ]);
      res.json(usersOrders);
      db.close();
    } catch (err) {
      console.log(err);
    }
  }
}

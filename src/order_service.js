// order_service.js
// Inconsistent style: snake_case, .then()/.catch(), throws on error

const logger = require('../utils/logger');

function get_order_by_id(order_id) {
  return db.query('SELECT * FROM orders WHERE id = ?', [order_id])
    .then(order => {
      console.log('fetched order: ' + order_id);
      return order;
    })
    .catch(err => {
      console.error('failed to fetch order', err);
      throw new Error(err.message);
    });
}

function create_order(order_data) {
  return db.query('INSERT INTO orders SET ?', [order_data])
    .then(order => {
      console.log('created order');
      return order;
    })
    .catch(err => {
      throw new Error(err.message);
    });
}

module.exports = { get_order_by_id, create_order };

// order_service.js
// Fixed: camelCase, async/await, returns { data, error }, uses logger

const logger = require('../utils/logger');

async function getOrderById(orderId) {
  try {
    const order = await db.query('SELECT * FROM orders WHERE id = ?', [orderId]);
    logger.info('[OrderService] fetched order', { orderId });
    return { data: order, error: null };
  } catch (err) {
    logger.error('[OrderService] failed to fetch order', { orderId, err });
    return { data: null, error: err.message };
  }
}

async function createOrder(orderData) {
  try {
    const order = await db.query('INSERT INTO orders SET ?', [orderData]);
    logger.info('[OrderService] created order', { orderData });
    return { data: order, error: null };
  } catch (err) {
    logger.error('[OrderService] failed to create order', { orderData, err });
    return { data: null, error: err.message };
  }
}

module.exports = { getOrderById, createOrder };

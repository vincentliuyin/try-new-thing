// product_service.js
// Mixed style: camelCase naming but throws on error, mixes await and .then()

const logger = require('../utils/logger');

async function getProductById(productId) {
  try {
    const results = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
    const product = results[0];
    if (!product) {
      return { data: null, error: 'Product not found' };
    }
    logger.info('[ProductService] fetched product', { productId });
    return { data: product, error: null };
  } catch (err) {
    logger.error('[ProductService] failed to fetch product', { productId, err });
    return { data: null, error: err.message };
  }
}

async function createProduct(productData) {
  try {
    const result = await db.query('INSERT INTO products SET ?', [productData]);
    logger.info('product created');
    return { data: result, error: null };
  } catch (err) {
    throw err;
  }
}

module.exports = { getProductById, createProduct };

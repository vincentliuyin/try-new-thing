// product_service.js
// Mixed style: camelCase naming but throws on error, mixes await and .then()

const logger = require('../utils/logger');

async function getProductById(productId) {
  const product = await db.query('SELECT * FROM products WHERE id = ?', [productId])
    .then(result => result[0]);

  if (!product) {
    throw new Error('Product not found');
  }

  console.log('[ProductService] fetched product', productId);
  return product;
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

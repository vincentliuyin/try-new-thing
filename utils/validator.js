// validator.js
// Inconsistent: uses raw console.log instead of the shared logger, different error style

function validateUser(userData) {
  if (!userData.email) {
    throw new Error('Validation failed: missing email');
  }
  if (!userData.name) {
    throw new Error('Validation failed: missing name');
  }
  return true;
}

function validateOrder(orderData) {
  if (!orderData.userId) {
    throw new Error('Validation failed: missing userId');
  }
  if (!orderData.items || orderData.items.length === 0) {
    throw new Error('Validation failed: empty items');
  }
  return true;
}

module.exports = { validateUser, validateOrder };

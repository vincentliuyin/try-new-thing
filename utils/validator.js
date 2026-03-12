// validator.js
// Inconsistent: uses raw console.log instead of the shared logger, different error style

function validate_user(user_data) {
  if (!user_data.email) {
    console.log('Validation failed: missing email');
    return false;
  }
  if (!user_data.name) {
    console.log('Validation failed: missing name');
    return false;
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

module.exports = { validate_user, validateOrder };

// user_service.js
// Consistent style: camelCase, async/await, returns { data, error }

const logger = require('../utils/logger');

async function getUserById(userId) {
  try {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    logger.info('[UserService] fetched user', { userId });
    return { data: user, error: null };
  } catch (err) {
    logger.info('[UserService] failed to fetch user', { userId, err });
    return { data: null, error: err.message };
  }
}

async function createUser(userData) {
  try {
    const user = await db.query('INSERT INTO users SET ?', [userData]);
    logger.info('[UserService] created user', { userData });
    return { data: user, error: null };
  } catch (err) {
    logger.info('[UserService] failed to create user', { userData, err });
    return { data: null, error: err.message };
  }
}

module.exports = { getUserById, createUser };

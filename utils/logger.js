// logger.js
// Structured logger with consistent method signatures

const logger = {
  info: (message, context = {}) => {
    console.log(JSON.stringify({ level: 'info', message, ...context, ts: new Date().toISOString() }));
  },
  error: (message, context = {}) => {
    console.error(JSON.stringify({ level: 'error', message, ...context, ts: new Date().toISOString() }));
  },
};

module.exports = logger;

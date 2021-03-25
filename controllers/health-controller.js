'use strict';

/**
 * Returns the status of the lambda
 * @returns {Object} Object with status of the lambda and time this is consulted
 */
const getHealth = () => (
  {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: true,
      message: 'Lambda is up',
      time: new Date().toISOString()
    })
  });

module.exports = { getHealth }
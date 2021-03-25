'use strict';

/**
 * Returns a list of values
 * @returns {Array} A list with objects
 */
const getAll = () => (
  {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: true,
      data: [
        {
          id: 1,
          description: 'First element'
        },
        {
          id: 2,
          description: 'Second element'
        },
        {
          id: 3,
          description: 'Third element'
        }
      ]
    })
  });

  module.exports = { getAll };
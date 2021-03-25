'use strict';

const { resources } = require('./container');

const invalidRequest = {
  statusCode: 405,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    status: true,
    message: 'Operation is not allowed'
  })
};

/**
 * Routes the request entering to appropriate controller
 * @param {Object} event of lambda
 * @returns {Object} Object response from controller
 */
const route = event => {
  const { resource, path, httpMethod, body } = event;
  const controller = resources.filter(element => element['resource'] == resource.replace('/', '').toLowerCase()).pop();
  const executor = controller ? controller.methods[httpMethod.toLowerCase()] : false
  return executor ? executor(path) : invalidRequest;
}

module.exports = { route };
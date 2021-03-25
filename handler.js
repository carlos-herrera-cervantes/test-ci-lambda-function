'use strict';

const { route } = require('./router');

exports.index = async event => {
  console.info('REQUEST: ', JSON.stringify(event, null, 2));
  return route(event);
}
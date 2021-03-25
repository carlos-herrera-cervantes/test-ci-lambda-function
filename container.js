'use strict';

const HealthController = require('./controllers/health-controller');
const ValuesController = require('./controllers/values-controller');

const resources = [
  {
    resource: 'health',
    methods: {
      get: path => /^\/health$/.test(path) ?
        HealthController.getHealth() :
        false
    }
  },
  {
    resource: 'values',
    methods: {
      get: path => /^\/values$/.test(path) ?
        ValuesController.getAll() :
        false
    }
  }
];

module.exports = { resources };
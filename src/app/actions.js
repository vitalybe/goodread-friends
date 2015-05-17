'use strict';

var Reflux = require('reflux');
var actions = Reflux.createActions({
    // user actions
    'register': { asyncResult: true }
});

module.exports = actions;
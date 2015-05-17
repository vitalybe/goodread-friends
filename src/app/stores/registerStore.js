'use strict';

var Reflux = require('reflux');
var actions = require('../actions');

var registerStore = Reflux.createStore({

    listenables: actions,

    onRegister: function(username, password) {
        setTimeout(() => {
            actions.register.completed();
            this.trigger();
        }, 1000);
    }

});

module.exports = registerStore;



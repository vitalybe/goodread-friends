'use strict';

var Reflux = require('reflux');
var _ = require('lodash');
var axios = require('axios');
var actions = require('../actions');

var sessionStore = Reflux.createStore({

    listenables: actions,

    onRegister: function(username, password) {
        var registrationData = _.object([username], [{password: password}]);
        axios.put('https://goodreads-friends.firebaseio.com/users.json', registrationData)
            .then((response) => {
                actions.register.completed();
                this.loginSuccessful(username);
            })
            .catch(function (response) {
                console.log(response);
            });
    },

    onLogin: function(username, password) {
        axios.get('https://goodreads-friends.firebaseio.com/users.json')
            .then((response) => {
                this.loginSuccessful(username);
            })
            .catch(function (response) {
                console.log(response);
            });
    },

    loginSuccessful(username) {
        this.loggedIn = username;
        this.trigger(this.loggedIn);
    }


});

module.exports = sessionStore;



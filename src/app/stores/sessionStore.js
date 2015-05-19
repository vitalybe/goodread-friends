'use strict';

var Reflux = require('reflux');
var _ = require('lodash');
var axios = require('axios');
var actions = require('../actions');

var sessionStore = Reflux.createStore({

    listenables: actions,

    init() {
        this.loggedIn = null;
        this.pending = false;
    },

    createState() {
        return { username: this.loggedIn, pending: this.pending };
    },

    getInitialState() {
        return this.createState();
    },

    onRegister: function(username, password) {
        var registrationData = _.object([username], [{password: password}]);

        this.loggedIn = null;
        this.pending = true;
        this.trigger(this.createState());

        axios.put('https://goodreads-friends.firebaseio.com/users.json', registrationData)
            .then((response) => {
                this.loggedIn = username;
                this.pending = false;
                this.trigger(this.createState());
            })
            .catch(function (response) {
                console.log(response);
            });
    },

    onLogin: function(username, password) {

        this.loggedIn = null;
        this.pending = true;

        axios.get('https://goodreads-friends.firebaseio.com/users.json')
            .then((response) => {

                this.loggedIn = username;
                this.pending = false;
                this.trigger(this.createState());
            })
            .catch(function (response) {
                console.log(response);
            });
    }

});

module.exports = sessionStore;



'use strict';

var Reflux = require('reflux');
var { Map } = require('immutable');
var _ = require('lodash');
var actions = require('../actions');
var userDataService = require('../services/userDataService');

var sessionStore = Reflux.createStore({

    listenables: actions,

    init() {
        this.data = Map({ loggedIn: null, pending: false });
    },

    getInitialState() {
        return {data: this.data};
    },

    triggerImmutable() {
        this.trigger({data: this.data});
    },

    onRegister: function(username, password) {
        var registrationData = _.object([username], [{password: password}]);

        this.data = this.data.update("loggedIn", v => null);
        this.data = this.data.update("pending", v => true);
        this.triggerImmutable();

        userDataService.createUser(registrationData)
            .then((response) => {
                this.data = this.data.update("loggedIn", v => Object.keys(response.data)[0]);
                this.data = this.data.update("pending", v => false);
                this.triggerImmutable();
            })
            .catch(function (response) {
                console.log(response);
            });
    },

    onLogin: function(username, password) {

        this.data = this.data.update("loggedIn", v => null);
        this.data = this.data.update("pending", v => true);
        this.triggerImmutable();

        userDataService.getUser()
            .then((response) => {

                this.data = this.data.update("loggedIn", v => username);
                this.data = this.data.update("pending", v => false);
                this.triggerImmutable();
            })
            .catch(function (response) {
                console.log(response);
            });
    }

});

module.exports = sessionStore;



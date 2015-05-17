var React = require('react');
var Reflux = require('reflux');
var registerStore = require('../stores/registerStore');
var actions = require('../actions');

module.exports = React.createClass({
    displayName: 'Register',

    mixins: [
        Reflux.listenTo(registerStore, 'onRegisterStore')
    ],

    getInitialState() {
        return {validation: null};
    },

    onRegisterStore() {
        alert("onRegisterStore");
    },

    onSubmit(e) {
        e.preventDefault();

        var username = React.findDOMNode(this.refs.username).value;
        var password = React.findDOMNode(this.refs.password).value;
        var password2 = React.findDOMNode(this.refs.password2).value;

        if(password !== password2) {
            this.setState({validation: "Passwords mismatch"});
        } else {
            this.setState({validation: null});
        }

        actions.register().then(() => {
            alert("promise finished");
        });
    },

    render: function () {
        return (
            <div>
                This is the registration page
                <form className="commentForm" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Username" ref="username" />
                    <input type="password" placeholder="Password" ref="password" />
                    <input type="password" placeholder="Repeat password" ref="password2" />
                    <input type="submit" value="Register" />
                </form>
                <If condition={this.state.validation}>
                    <div>Validation problem: {this.state.validation}</div>
                </If>
            </div>
        )
    }
});
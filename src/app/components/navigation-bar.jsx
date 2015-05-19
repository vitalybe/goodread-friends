var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var sessionStore = require('../stores/sessionStore');


module.exports = React.createClass({
    displayName: 'NavigationBar',
    mixins: [
        Reflux.connect(sessionStore, "session")
    ],

    render: function () {
        return (
            <div>
                <div>Logged-in user: {this.state.session.username}</div>
                <ul>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="register">Register</Link></li>
                </ul>
            </div>
        )
    }
});
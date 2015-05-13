var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

module.exports = React.createClass({
    displayName: 'NavigationBar',
    getInitialState() {
        return { loggedIn: "Anonymous" };
    },
    render: function () {
        return (
            <div>
                <div>Logged-in user: {this.state.loggedIn}</div>
                <ul>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="register">Register</Link></li>
                </ul>
            </div>
        )
    }
});
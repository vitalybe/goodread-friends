require("./style.css");

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./components/app.jsx');
var Login  = require('./components/login.jsx');
var Register = require('./components/register.jsx');
var About = require('./components/about.jsx');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login}></Route>
        <Route name="register" handler={Register}></Route>
        <DefaultRoute name="about" handler={About}></DefaultRoute>
    </Route>
);

Router.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('content'));
});
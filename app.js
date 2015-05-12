require("./style.css");

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Hello = require('./hello');

var routes = (
    <Route>
        <DefaultRoute name="app" handler={Hello}></DefaultRoute>
    </Route>
);

Router.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('content'));
});
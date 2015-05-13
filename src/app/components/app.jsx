var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler;

var NavigationBar = require('./navigation-bar');

module.exports = React.createClass({
    displayName: 'App',
    getInitialState() {
        return {yourName: ""};
    },
    onInputChange() {
        var value = React.findDOMNode(this.refs.name).value;
        this.setState({yourName: value});
    },
    render: function () {
        return (
            <div>
                <NavigationBar />
                <RouteHandler />
            </div>
        )
    }
});
var React = require('react');
module.exports = React.createClass({
    displayName: 'HelloReact',
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
                <div>
                    <span>Enter your name: </span>
                    <input ref="name" onChange={this.onInputChange}></input>
                </div>
                <div>
                    <span>Welcome: {this.state.yourName}</span>
                </div>
            </div>
        )
    }
});
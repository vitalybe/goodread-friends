var React = require('react');

module.exports = React.createClass({
    displayName: 'Register',
    getInitialState() {
        return {validation: null};
    },

    handleSubmit(e) {
        e.preventDefault();

        var username = React.findDOMNode(this.refs.username).value;
        var password = React.findDOMNode(this.refs.password).value;
        var password2 = React.findDOMNode(this.refs.password2).value;

        if(password !== password2) {
            this.setState({validation: "Passwords mismatch"});
        } else {
            this.setState({validation: null});
        }
    },

    render: function () {
        return (
            <div>
                This is the registration page
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" ref="username" />
                    <input type="password" placeholder="Password" ref="password" />
                    <input type="password" placeholder="Repeat password" ref="password2" />
                    <input type="submit" value="Register" />
                </form>
                { this.state.validation &&
                    <div>Validation problem: {this.state.validation}</div>
                }
            </div>
        )
    }
});
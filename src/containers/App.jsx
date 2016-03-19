import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UsersActions from '../actions/users';

class App extends Component {
    componentWillMount() {
        const { loadUsers } = this.props.actions;

        loadUsers();
    }

    render() {
        const { users } = this.props;

        return (
            <h1> {JSON.stringify(users)} </h1>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: users.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UsersActions, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UsersActions from '../actions/users';

import App from '../components/App.jsx';

const LANGUAGES = ['javascript', 'java', 'python', 'css', 'php', 'c++', 'c#', 'c', 'shell', 'objective-c', 'go', 'perl'];

class AppContainer extends Component {
    componentWillMount() {
        const { loadUsers } = this.props.actions;

        loadUsers();
    }

    handleLanguageChange() {
        const { loadUsers } = this.props.actions;

        loadUsers();
    }

    render() {
        const { users } = this.props;

        return (
            <App users={users} />
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
)(AppContainer);

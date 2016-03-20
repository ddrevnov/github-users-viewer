import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UsersActions from '../actions/users';

import App from '../components/App.jsx';

const LANGUAGES = ['javascript', 'java', 'python', 'css', 'php', 'c++', 'c#', 'c', 'shell', 'objective-c', 'go', 'perl'];

const DEFAULT_SELECTED = LANGUAGES[0];

class AppContainer extends Component {
    componentWillMount() {
        const { loadUserProfiles } = this.props.actions;

        loadUserProfiles(DEFAULT_SELECTED);
    }

    handleLanguageChange(language) {
        const { loadUserProfiles } = this.props.actions;

        loadUserProfiles(language);
    }

    render() {
        const { users, selectedLanguage } = this.props;

        return (
            <App
                languages={LANGUAGES}
                selectedLanguage={selectedLanguage}
                onLanguageChange={::this.handleLanguageChange}
                users={users}
            />
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: users.users,
        loadingStatus: users.loadingStatus,
        selectedLanguage: users.selectedLanguage || DEFAULT_SELECTED
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

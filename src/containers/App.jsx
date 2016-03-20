import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as UsersActions from '../actions/users';

import App from '../components/App.jsx';

const LANGUAGES = [
    'javascript',
    'java',
    'python',
    'css',
    'php',
    'c++',
    'c#',
    'c',
    'shell',
    'objective-c',
    'go',
    'perl'
];

const DEFAULT_SELECTED_LANGUAGE = LANGUAGES[0];

class AppContainer extends Component {
    componentWillMount() {
        const { loadPopularUsersByLanguage } = this.props.actions;

        loadPopularUsersByLanguage(DEFAULT_SELECTED_LANGUAGE);
    }

    handleLanguageChange(language) {
        const { loadPopularUsersByLanguage } = this.props.actions;

        loadPopularUsersByLanguage(language);
    }

    render() {
        const { users, selectedLanguage, loadingPercent, error } = this.props;

        return (
            <App
                languages={LANGUAGES}
                loadingPercent={loadingPercent}
                selectedLanguage={selectedLanguage}
                onLanguageChange={::this.handleLanguageChange}
                users={users}
                error={error}
            />
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: users.items,
        error: users.error,
        loadingPercent: users.loadingPercent,
        selectedLanguage: users.selectedLanguage || DEFAULT_SELECTED_LANGUAGE
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

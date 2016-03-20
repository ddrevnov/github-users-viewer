import React, { Component } from 'react';

import LanguageSelect from './LanguageSelect.jsx';
import UserTile from './UserTile.jsx';

import styles from './App.css';

class App extends Component {
    render() {
        const { users, selectedLanguage, languages, onLanguageChange } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <LanguageSelect
                        selectedLanguage={selectedLanguage}
                        languages={languages}
                        onChange={onLanguageChange}
                    />

                    <div className={styles.list}>
                        {
                            users.map(user =>
                                <UserTile
                                    name={user.login}
                                    isLoading={user.isLoading}
                                    avatar={user.avatar}
                                    key={user.login}
                                    numberOfFollovers={user.numberOfFollowers}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

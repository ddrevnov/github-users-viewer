import React, { Component } from 'react';

import LanguageSelect from './LanguageSelect.jsx';
import UserTile from './UserTile.jsx';

import styles from './App.css';

class App extends Component {
    render() {
        const { users } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <LanguageSelect />

                    <div className={styles.list}>
                        {
                            users.map(user =>
                                <UserTile
                                    name={user.login}
                                    avatar={user.avatar_url}
                                    key={user.login}
                                    numberOfFollovers={10}
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

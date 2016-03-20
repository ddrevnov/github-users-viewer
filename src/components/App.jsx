import React, { Component, PropTypes } from 'react';

import Progress from 'react-progress';

import LanguageSelect from './LanguageSelect.jsx';
import UserTile       from './UserTile.jsx';

import styles from './App.css';

class App extends Component {
    static propTypes = {
        users            : PropTypes.arrayOf(PropTypes.object),
        selectedLanguage : PropTypes.string,
        languages        : PropTypes.arrayOf(PropTypes.string),
        loadingPercent   : PropTypes.number,
        onLanguageChange : PropTypes.func
    };

    render() {
        const { users, selectedLanguage, languages, loadingPercent, onLanguageChange } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <Progress percent={loadingPercent} speed={0} />

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
                                    link={user.linkToProfileOnGithub}
                                    key={user.login}
                                    numberOfFollowers={user.numberOfFollowers}
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

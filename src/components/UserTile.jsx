import React, { Component } from 'react';

import Select from 'react-select';

import { capitalizeFirstLetter } from '../utils';

import styles from './UserTile.css';

class UserTile extends Component {
    render() {
        const { name, avatar, numberOfFollovers } = this.props;

        return (
            <div className={styles.root}>
                <img className={styles.avatar} src={avatar} />
                <div className={styles.info}>
                    <div className={styles.name}> {name} </div>
                    <div className={styles.followers}> {numberOfFollovers} followers </div>
                </div>
            </div>
        );
    }
}

export default UserTile;

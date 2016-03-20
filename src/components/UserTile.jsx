import React, { Component, PropTypes } from 'react';

import styles from './UserTile.css';

class UserTile extends Component {
    static propTypes = {
        link              : PropTypes.string,
        name              : PropTypes.string,
        avatar            : PropTypes.string,
        numberOfFollowers : PropTypes.number,
        isLoading         : PropTypes.bool
    };

    render() {
        const { link, name, avatar, isLoading, numberOfFollowers } = this.props;

        if (isLoading) {
            return <div className={styles.root} />;
        }

        return (
            <a href={link} target='_blank' className={styles.root}>
                <img className={styles.avatar} src={avatar} />
                <div className={styles.info}>
                    <div className={styles.name}> {name} </div>
                    <div className={styles.followers}> {numberOfFollowers} followers </div>
                </div>
            </a>
        );
    }
}

export default UserTile;

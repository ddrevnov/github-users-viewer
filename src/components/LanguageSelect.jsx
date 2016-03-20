import React, { Component, PropTypes } from 'react';

import styles from './LanguageSelect.css';

class LanguageSelect extends Component {
    static propTypes = {
        selectedLanguage : PropTypes.string,
        languages        : PropTypes.arrayOf(PropTypes.string),
        onChange         : PropTypes.func
    };

    handleChange(e) {
        const { onChange } = this.props;

        if (onChange) {
            onChange(e.target.value);
        }
    }

    render() {
        const { selectedLanguage, languages } = this.props;

        return (
            <div className={styles.root}>
                <select value={selectedLanguage} onChange={::this.handleChange}>
                    {
                        languages.map(language =>
                            <option value={language} key={language}>
                                {language}
                            </option>
                        )
                    }
                </select>
            </div>
        );
    }
}

export default LanguageSelect;

import React, { Component } from 'react';

import Select from 'react-select';

import { capitalizeFirstLetter } from '../utils';

import styles from './LanguageSelect.css';

class LanguageSelect extends Component {
    handleChange(value) {
        console.log(value);
    }

    render() {
        const options = [
            { value: 'javascript', label: 'javascript' },
            { value: 'java', label: 'java' },
            { value: 'python', label: 'python' },
            { value: 'css', label: 'css' },
            { value: 'php', label: 'php' },
            { value: 'c++', label: 'c++' },
            { value: 'c#', label: 'c#' },
            { value: 'c', label: 'c' },
            { value: 'shell', label: 'shell' },
            { value: 'objective-c', label: 'objective-c' },
            { value: 'go', label: 'go' },
            { value: 'perl', label: 'perl' }
        ];

        return (
            <div className={styles.root}>
                <select value={'java'}>
                    {
                        options.map(option =>
                            <option value={option.value}>
                                {option.label}
                            </option>
                        )
                    }
                </select>
            </div>
        );
    }
}

export default LanguageSelect;

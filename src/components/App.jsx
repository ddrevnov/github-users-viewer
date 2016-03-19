import React, { Component } from 'react';

class App extends Component {
    render() {
        const { users } = this.props;

        return (
            <h1> {JSON.stringify(users)} </h1>
        );
    }
}

export default App;

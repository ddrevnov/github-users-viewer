import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App.jsx';
import configure from './store';

import './assets/base.css';

console.info(window.APP_CONFIG);

const store = configure();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

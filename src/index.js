import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ActionReducers from './ActionReducers';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(ActionReducers)

function render() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

ReactDOM.render(render(), document.getElementById('root'));
registerServiceWorker();

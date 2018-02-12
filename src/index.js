import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ActionReducers from './ActionReducers';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/' }),
  cache: new InMemoryCache()
});

// Enhance the redux store with middleware (add a chain, between dispatching of action, and these actions reaching the reducers)
let store = createStore(ActionReducers,
		compose(
				applyMiddleware(thunkMiddleware),
				// If you are using the devToolsExtension, you can add it here also
      	(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
			)
	);

function render() {
	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Provider>
	)
}

ReactDOM.render(render(), document.getElementById('root'));
registerServiceWorker();

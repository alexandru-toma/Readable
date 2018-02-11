import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import thunk from 'redux-thunk';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';


const store = createStore(
    reducer
)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
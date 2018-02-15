import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import thunk from 'redux-thunk';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import {Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import CategoryView from "./components/CategoryView";
import NotFound from "./components/NotFound";

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
    thunk,
    routerMiddleware(history)
  ]

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
        <div className="content">
        <Route exact path="/" component={App} />
        <Route exact path="/:category" component={CategoryView} />
        <Route component={NotFound} />
      </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker()
import './reset.less';
import './default.less';

import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './Routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const middleWares = [];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(thunk);
    middlewares.push(createLogger());
}

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleWares),
        window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root'));

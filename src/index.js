import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

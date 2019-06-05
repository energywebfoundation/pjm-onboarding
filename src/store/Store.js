import {createStore, applyMiddleware, compose} from 'redux';
import Reducers from './reducers/Reducers';
import thunk from 'redux-thunk';

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store  = createStore(Reducers, enhancedCompose(applyMiddleware(thunk)));

export default Store;




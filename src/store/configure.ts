import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../models';

const configure = () => createStore(reducer, applyMiddleware(thunk));

export default configure;

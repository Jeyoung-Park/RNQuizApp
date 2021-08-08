import { createStore } from 'redux';
import reducer from '../models';

const configure = () => createStore(reducer);

export default configure;

import { combineReducers } from 'redux';
import appInfo from './appInfo';
import quiz from './quiz';

const rootReducer = combineReducers({
	appInfo,
	quiz,
});

export default rootReducer;

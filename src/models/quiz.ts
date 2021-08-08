import { handleActions } from 'redux-actions';
import invokeAPI from '../restApi';
import { createPromiseThunk } from './lib/asyncUtils';

// 초기 상태
export const initialState = {
	// 퀴즈 목록
	quizList: [],
};

// 액션 정의
// ******************************************************************************
// 비동기 액션인 경우 _SUCCESS, ERROR 추가, 이외에는 추가 x
// ******************************************************************************

// 퀴즈 목록 가져오기
const GET_QUIZ_LIST = 'quiz/GET_QUIZ_LIST';
const GET_QUIZ_LIST_SUCCESS = 'quiz/GET_QUIZ_LIST_SUCCESS';
const GET_QUIZ_LIST_ERROR = 'quiz/GET_QUIZ_LIST_ERROR';

// *********************************** thunk ************************************
//  비동기 액션일 때는 createPromiseThunk 호출, 아니면 그냥 action(object) 리턴
// ******************************************************************************

// 퀴즈 목록 가져오기
export const getQuizList = createPromiseThunk(
	GET_QUIZ_LIST,
	invokeAPI({ method: 'get' }),
);

// *********************************** reducer ***********************************
export default handleActions(
	{
		[GET_QUIZ_LIST]: (state, action) => state,
		[GET_QUIZ_LIST_SUCCESS]: (state, { payload: result }) => ({
			...state,
			quizList: result,
		}),
		[GET_QUIZ_LIST_ERROR]: (state, action) => state,
	},
	initialState,
);

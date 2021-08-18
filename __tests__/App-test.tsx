/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../src/App';
import MainStackNavigator from '../src/components/navigation/MainStackNavigator';
import { getData } from '../src/shared/functions/AsyncStorage';
import { Provider } from 'react-redux';
import store from '../src/store';
// Note: test renderer must be required after react-native.
// beforeAll(() => {
// 	jest.mock('@react-native-community/async-storage');
// });

const KEY_WRONG_QUIZZES = 'KEY_WRONG_QUIZZES';

jest.mock('react-native-simple-toast', () => ({
	SHORT: jest.fn(),
}));

it('checks if Async Storage is used', async () => {
	// const dispatch = useDispatch();

	await getData({
		key: KEY_WRONG_QUIZZES,
	});

	expect(AsyncStorage.getItem).toBeCalledWith(KEY_WRONG_QUIZZES);
});

it('snapshot test', async () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('check page contains proper elements', async () => {
	const component = (
		<Provider store={store}>
			<NavigationContainer>
				<MainStackNavigator />
			</NavigationContainer>
		</Provider>
	);

	const { findByText } = render(component);

	const title = await findByText('React Native Quiz App');
	const description = await findByText('React Native로 제작된 퀴즈 앱입니다.');
	const buttonQuiz = await findByText('퀴즈 풀기');
	const buttonWrongQuiz = await findByText('오답 노트');

	expect(title).toBeTruthy();
	expect(description).toBeTruthy();
	expect(buttonQuiz).toBeTruthy();
	expect(buttonWrongQuiz).toBeTruthy();
});

// it('checks if Async Storage is used', async () => {
// 	await asyncOperationOnAsyncStorage();

// 	expect(AsyncStorage.getItem).toBeCalledWith('myKey');
// });

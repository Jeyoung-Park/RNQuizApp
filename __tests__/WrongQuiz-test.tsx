import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../src/store';
import WrongQuiz from '../src/components/screen/WrongQuiz';

jest.mock('react-native-simple-toast', () => ({
	SHORT: jest.fn(),
}));

it('snapshot test', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<WrongQuiz />
			</Provider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

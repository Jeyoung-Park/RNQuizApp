import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import Quiz from '../src/components/screen/Quiz';
import store from '../src/store';

jest.mock('react-native-simple-toast', () => ({
	SHORT: jest.fn(),
}));

it('snapshot test', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<Quiz />
			</Provider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

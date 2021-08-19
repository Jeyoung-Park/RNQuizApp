import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../src/store';
import Result from '../src/components/screen/Result';

jest.mock('react-native-simple-toast', () => ({
	SHORT: jest.fn(),
}));

it('snapshot test', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<Result route={{ params: [1, 2, 3] }} />
			</Provider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

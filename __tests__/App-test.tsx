/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

// Note: test renderer must be required after react-native.
// beforeAll(() => {
// 	jest.mock('@react-native-community/async-storage');
// });

it('renders correctly', () => {
	// const tree = renderer.create(<App />).toJSON();
	// expect(tree).toMatchSnapshot();
});

// it('checks if Async Storage is used', async () => {
// 	await asyncOperationOnAsyncStorage();

// 	expect(AsyncStorage.getItem).toBeCalledWith('myKey');
// });

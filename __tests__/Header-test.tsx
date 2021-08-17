import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/shared/components/Header';

it('renders correctly', () => {
	const tree = renderer.create(
		<Header
			title="Quiz"
			goBack={() => console.log('go Back')}
			goBackIcon="left"
		/>,
	);
	expect(tree).toMatchSnapshot();
});

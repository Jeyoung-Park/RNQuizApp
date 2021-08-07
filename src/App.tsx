/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Home from './components/screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './components/navigation/MainStackNavigator';


const App = () => {
	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<MainStackNavigator />
			</NavigationContainer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#ffffff',
	},
});

export default App;

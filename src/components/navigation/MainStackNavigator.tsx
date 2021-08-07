import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quiz from '../screen/Quiz';

const Stack = createNativeStackNavigator();

interface MainStackNavigatorProps {}

const MainStackNavigator = (props: MainStackNavigatorProps) => {
	return (
		<Stack.Navigator initialRoute="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
            <Stack.Screen
				name="Quiz"
				component={Quiz}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainStackNavigator;

const styles = StyleSheet.create({
	container: {},
});

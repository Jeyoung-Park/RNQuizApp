import * as React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Quiz from '../screen/Quiz';
import Result from '../screen/Result';
import WrongQuiz from '../screen/WrongQuiz';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => (
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
				gestureEnabled: false,
			}}
		/>
		<Stack.Screen
			name="Result"
			component={Result}
			options={{
				headerShown: false,
				gestureEnabled: false,
			}}
		/>
		<Stack.Screen
			name="WrongQuiz"
			component={WrongQuiz}
			options={{
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
);

export default MainStackNavigator;

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Quiz } from '../../../types';

interface WrongQuizItemProps {
	quizItem: Quiz;
	itemHeight: number;
}

const WrongQuizItem = ({ quizItem, itemHeight }: WrongQuizItemProps) => {
	return (
		<TouchableOpacity style={[styles.container, { height: itemHeight }]}>
			<Text>{quizItem.question}</Text>
		</TouchableOpacity>
	);
};

export default WrongQuizItem;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		// height: 80,
		justifyContent: 'center',

		paddingHorizontal: 20,

		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
});
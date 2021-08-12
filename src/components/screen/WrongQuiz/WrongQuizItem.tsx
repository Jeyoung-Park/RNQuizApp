import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { decode } from 'html-entities';
import { Quiz } from '../../../types';

interface WrongQuizItemProps {
	quizItem: Quiz;
	itemHeight: number;
	onPress: (param: Quiz) => void;
}

const WrongQuizItem = ({
	quizItem,
	itemHeight,
	onPress,
}: WrongQuizItemProps) => (
	<TouchableOpacity
		style={[styles.container, { height: itemHeight }]}
		onPress={() => onPress(quizItem)}
	>
		<Text>{decode(quizItem.question)}</Text>
	</TouchableOpacity>
);

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

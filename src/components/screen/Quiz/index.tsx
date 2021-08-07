import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface QuizProps {}

const Quiz = (props: QuizProps) => {
	return (
		<View style={styles.container}>
			<Text>Quiz</Text>
		</View>
	);
};

export default Quiz;

const styles = StyleSheet.create({
	container: { flex: 1 },
});

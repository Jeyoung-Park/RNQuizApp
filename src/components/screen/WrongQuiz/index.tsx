import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WrongQuizProps {}

const WrongQuiz = (props: WrongQuizProps) => {
	return (
		<View style={styles.container}>
			<Text>WrongQuiz</Text>
		</View>
	);
};

export default WrongQuiz;

const styles = StyleSheet.create({
	container: {},
});

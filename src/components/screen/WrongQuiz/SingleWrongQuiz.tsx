import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SingleQuiz from '../Quiz/SingleQuiz';

interface SingleWrongQuizProps {
	navigation: any;
	route: any;
}

const SingleWrongQuiz = ({ navigation, route }: SingleWrongQuizProps) => {
	const { quizItem } = route.params;

	const [isSolved, setIsSolved] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			{/* <Text>SingleWrongQuiz</Text> */}
			<View style={styles.singleQuizContainer}>
				<SingleQuiz
					currentQuiz={quizItem}
					isSolved={isSolved}
					setIsSolved={(param) => setIsSolved(param)}
				/>
			</View>
		</View>
	);
};

export default SingleWrongQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	singleQuizContainer: {
		flex: 1,
	},
});

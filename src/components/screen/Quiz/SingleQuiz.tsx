import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
// import { Quiz } from '../../../interface';

interface SingleQuizProps {
	currentIndex: number;
	// setCurrentIndex: (param: number) => void;
}

const SingleQuiz = ({currentIndex}: SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<Text>SingleQuiz</Text>
		</SafeAreaView>
	);
};

export default SingleQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		// flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

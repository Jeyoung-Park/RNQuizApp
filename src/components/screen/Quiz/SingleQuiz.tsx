import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
// import { Quiz } from '../../../interface';

interface SingleQuizProps {
	currentIndex: number;
	setCurrentIndex: (param: number) => void;
}

const SingleQuiz = ({ currentIndex, setCurrentIndex }: SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const onPressPrevious = () => {
		if (currentIndex === 0) {
			SimpleToast.show('첫 번째 문제입니다.');
			return;
		}
		setCurrentIndex(currentIndex - 1);
	};

	const onPressNext = () => {
		if (currentIndex === quizList?.length - 1) {
			SimpleToast.show('마지막 문제입니다.');
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={onPressPrevious}>
				<Text>Previous</Text>
			</TouchableOpacity>
			<Text>SingleQuiz</Text>
			<TouchableOpacity onPress={onPressNext}>
				<Text>Next</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default SingleQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

import * as React from 'react';
import { useEffect, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import { Quiz } from '../../../interface';
// import { Quiz } from '../../../interface';

interface SingleQuizProps {
	currentIndex: number;
	// setCurrentIndex: (param: number) => void;
}

const SingleQuiz = ({ currentIndex }: SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const [currentQuiz, setCurrentQuiz] = useState<Quiz>();
	const [selections, setSelections] = useState<string[] | undefined>([]);
	const [choice, setChoice] = useState<string>();

	console.log('currentQuiz in SIngleQuiz, ', currentQuiz);

	useEffect(() => {
		setCurrentQuiz(quizList?.[currentIndex]);
	}, [currentIndex, quizList]);

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * 4);
		console.log('randomNum, ', randomNum);
		console.log('incorrect answers before, ', currentQuiz?.incorrect_answers);
		const tempSelections = { ...currentQuiz }?.incorrect_answers;
		// tempSelections = [];
		tempSelections?.splice(randomNum, 0, currentQuiz?.correct_answer);
		console.log(
			'tempSelections, ',
			tempSelections,
			currentQuiz?.incorrect_answers,
			currentQuiz?.correct_answer,
		);
		setSelections(tempSelections);
	}, [currentQuiz]);

	useEffect(() => {
		if (choice === currentQuiz?.correct_answer) {
			SimpleToast.show('정답입니다.');
		} else {
			SimpleToast.show('오답입니다.');
		}
	}, [choice]);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<Text>
				Q{currentIndex + 1}. {currentQuiz?.category}
			</Text>
			<Text>{currentQuiz?.question}</Text>
			{selections?.map((item, index) => (
				<TouchableOpacity
					key={item + '' + index}
					onPress={() => {
						setChoice(item);
					}}
				>
					<Text>{item}</Text>
				</TouchableOpacity>
			))}
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

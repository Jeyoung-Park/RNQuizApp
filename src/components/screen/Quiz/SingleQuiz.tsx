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
import config from '../../../config';

interface SingleQuizProps {
	currentIndex: number;
	goToNext: () => void;
	// setCurrentIndex: (param: number) => void;
}

const SingleQuiz = ({ currentIndex, goToNext }: SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const [currentQuiz, setCurrentQuiz] = useState<Quiz>();
	const [selections, setSelections] = useState<string[] | undefined>([]);
	const [choice, setChoice] = useState<string | null>(null);

	console.log('currentQuiz in SIngleQuiz, ', currentQuiz);

	useEffect(() => {
		setCurrentQuiz(quizList?.[currentIndex]);
	}, [currentIndex, quizList]);

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * 4);
		console.log('randomNum, ', randomNum);
		console.log('incorrect answers before, ', currentQuiz?.incorrect_answers);
		const tempSelections = currentQuiz?.incorrect_answers
			? [...currentQuiz?.incorrect_answers]
			: null;
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
		if (choice === undefined || choice === null) return;

		if (choice === currentQuiz?.correct_answer) {
			SimpleToast.show('정답입니다.');
		} else {
			SimpleToast.show('오답입니다.');
		}
		goToNext();
	}, [choice]);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				<Text>
					Q{currentIndex + 1}. {currentQuiz?.category}
				</Text>
			</View>
			<View style={styles.contentContainer}>
				<Text>{currentQuiz?.question}</Text>
			</View>
			<View style={{ ...styles.contentContainer, flex: 2 }}>
				{selections?.map((item, index) => (
					<TouchableOpacity
						key={`${item}-${index}`}
						onPress={() => {
							setChoice(item);
						}}
						style={styles.selectionButton}
					>
						<Text>{item}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
};

export default SingleQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		// flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor:'red'
	},
	selectionButton: {
		// flex:1,
		width: config.WINDOW_WIDTH - 32,
		paddingVertical: 20,
		backgroundColor: 'gray',

		justifyContent: 'center',
		alignItems: 'center',

		marginBottom: 10,

		borderRadius: 10,
	},
});

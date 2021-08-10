/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-use-before-define */
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
// import { number } from 'prop-types';

interface SingleQuizProps {
	currentIndex: number;
	isSolved: boolean;
	setIsSolved: (param: boolean) => void;
	// goToNext: () => void;
	// setCurrentIndex: (param: number) => void;
}

interface QuizNumberProps {
	currentIndex: number;
	correctNumber: number;
	quizList: Quiz[];
}

interface QuizCategoryProps {
	currentQuiz: Quiz | undefined;
}

interface QuizContentProps {
	currentQuiz: Quiz | undefined;
}

interface QuizSelectionsProps {
	selections: string[] | undefined;
	setChoice: (param: string) => void;
	isSolved: boolean;
}

const QuizNumber = React.memo(
	({ currentIndex, correctNumber, quizList }: QuizNumberProps) => (
		<View style={styles.quizNumbersContainer}>
			<Text>Q{currentIndex + 1}</Text>
			<Text>
				{correctNumber}/{quizList?.length}
			</Text>
		</View>
	),
);

const QuizCategory = React.memo(({ currentQuiz }: QuizCategoryProps) => (
	<View style={styles.contentContainer}>
		<Text>{currentQuiz?.category}</Text>
	</View>
));

const QuizQuestion = React.memo(({ currentQuiz }: QuizContentProps) => (
	<View style={{ ...styles.contentContainer, flex: 2 }}>
		<Text>{currentQuiz?.question}</Text>
	</View>
));

const QuizSelection = React.memo(
	({ selections, setChoice, isSolved }: QuizSelectionsProps) => (
		<View style={{ ...styles.contentContainer, flex: 3 }}>
			{selections?.map((item: string, index: number) => (
				<TouchableOpacity
					key={`${item}-${index}`}
					onPress={() => {
						setChoice(item);
					}}
					style={styles.selectionButton}
					disabled={isSolved}
				>
					<Text>{item}</Text>
				</TouchableOpacity>
			))}
		</View>
	),
);

const SingleQuiz = ({
	currentIndex,
	isSolved,
	setIsSolved,
}: SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const [currentQuiz, setCurrentQuiz] = useState<Quiz | undefined>();
	const [selections, setSelections] = useState<string[] | undefined>([]);
	const [choice, setChoice] = useState<string | null>(null);
	const [correctNumber, setCorrectNumber] = useState<number>(0);

	console.log('currentQuiz in SIngleQuiz, ', currentQuiz);

	useEffect(() => {
		setCurrentQuiz(quizList?.[currentIndex]);
		setIsSolved(false);
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
			setCorrectNumber(correctNumber + 1);
		} else {
			SimpleToast.show('오답입니다.');
		}
		// goToNext();
		setIsSolved(true);
	}, [choice]);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<QuizNumber
				currentIndex={currentIndex}
				correctNumber={correctNumber}
				quizList={quizList}
			/>
			<QuizCategory currentQuiz={currentQuiz} />
			<QuizQuestion currentQuiz={currentQuiz} />
			<QuizSelection
				selections={selections}
				setChoice={setChoice}
				isSolved={isSolved}
			/>
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
		// alignItems: '',
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
	quizNumbersContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
});

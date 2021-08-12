/* eslint-disable react/require-default-props */
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
import { decode } from 'html-entities';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Quiz } from '../../../types';
import config from '../../../config';
import Timer from './Timer';
// import { number } from 'prop-types';

interface SingleQuizProps {
	currentQuiz: Quiz;
	currentIndex?: number;
	isSolved: boolean;
	setIsSolved: (param: boolean) => void;
	correctNumber?: number;
	setCorrectNumber?: (param: number) => void;
	wrongQuizIndexList?: number[];
	setWrongQuizIndexList?: (param: number[]) => void;
	// isStart: boolean;
	// setIsStart: (param: boolean) => void;
}

interface QuizNumberProps {
	currentIndex: number;
	correctNumber: number;
	quizList: Quiz[];
	isStart: boolean;
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
	({ currentIndex, correctNumber, quizList, isStart }: QuizNumberProps) => {
		console.log('isStart in QuizNumber, ', isStart);
		return (
			<View style={styles.quizNumbersContainer}>
				<Text>Q{currentIndex + 1}</Text>
				<Timer isStart={isStart} />
				<Text>
					{correctNumber}/{quizList?.length}
				</Text>
			</View>
		);
	},
);

const QuizCategory = React.memo(({ currentQuiz }: QuizCategoryProps) => (
	<View style={styles.contentContainer}>
		<Text>{decode(currentQuiz?.category)}</Text>
	</View>
));

const QuizQuestion = React.memo(({ currentQuiz }: QuizContentProps) => (
	<View style={{ ...styles.contentContainer, flex: 2 }}>
		<Text>{decode(currentQuiz?.question)}</Text>
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
					<Text style={styles.quizText}>{decode(item)}</Text>
				</TouchableOpacity>
			))}
		</View>
	),
);

const SingleQuiz = ({
	currentQuiz,
	currentIndex,
	isSolved,
	setIsSolved,
	correctNumber,
	setCorrectNumber,
	wrongQuizIndexList,
	setWrongQuizIndexList,
}: // isStart,
// setIsStart,
SingleQuizProps) => {
	console.log('currentIndex', currentIndex);

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const [selections, setSelections] = useState<string[] | undefined>([]);
	const [choice, setChoice] = useState<string | null>(null);

	// console.log('currentQuiz in SIngleQuiz, ', currentQuiz);

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
			setCorrectNumber && setCorrectNumber(correctNumber + 1);
		} else {
			SimpleToast.show('오답입니다.');
			setWrongQuizIndexList &&
				setWrongQuizIndexList([...wrongQuizIndexList, currentIndex]);
		}
		// goToNext();
		setIsSolved(true);
	}, [choice]);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			{correctNumber !== undefined && (
				<QuizNumber
					currentIndex={currentIndex}
					correctNumber={correctNumber}
					quizList={quizList}
					isStart={!(currentIndex === quizList?.length - 1 && isSolved)}
				/>
			)}
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
		// height: 50,
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
	quizText: { marginHorizontal: 10 },
});

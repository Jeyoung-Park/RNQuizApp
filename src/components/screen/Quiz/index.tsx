/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	BackHandler,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {
	// getQuizListAction,
	setQuizCorrectNumberAction,
	setRetryCountAction,
} from '../../../models/quiz';
import { createTwoButtonAlert } from '../../../shared/functions/Alert';
import Header from '../../../shared/components/Header';
import SingleQuiz from './SingleQuiz';

interface QuizProps {
	// eslint-disable-next-line react/require-default-props
	navigation?: any;
}

const Quiz = ({ navigation }: QuizProps) => {
	const dispatch = useDispatch();

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);
	const retryCount = useSelector((state) => state.quiz.retryCount);

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isSolved, setIsSolved] = useState<boolean>(false);
	const [correctNumber, setCorrectNumber] = useState<number>(0);
	const [wrongQuizIndexList, setWrongQuizIndexList] = useState<number[]>([]);
	const [currentQuiz, setCurrentQuiz] = useState<Quiz | undefined>();

	console.log('quizList in Quiz index, ', quizList);

	const setRetryCount = (count: number) => {
		try {
			dispatch(setRetryCountAction(count));
		} catch (e) {
			console.warn('error in setRetryCount, ', e);
			SimpleToast.show('재도전을 하는 데에 에러가 발생했습니다.');
		}
	};

	const goBack = () => {
		createTwoButtonAlert({
			message:
				'퀴즈를 푸는 도중에 나가시면 내용이 저장되지 않습니다.\n나가시겠습니까?',
			text_ok: '나가기',
			text_cancel: '취소',
			function_ok: () => {
				navigation.goBack();
			},
		});
	};

	const resetValues = () => {
		setCurrentIndex(0);
		setIsSolved(false);
		setCorrectNumber(0);
		setWrongQuizIndexList([]);
	};

	// const getQuizList = async (numberOfQuiz: number = 10) => {
	// 	try {
	// 		const result = await dispatch(
	// 			getQuizListAction({
	// 				subPath: `?amount=${numberOfQuiz}&type=multiple`,
	// 				params: null,
	// 				data: null,
	// 			}),
	// 		);
	// 		console.log('result in getQuizList, ', result);
	// 	} catch (e) {
	// 		console.warn('error in getQuizList, ', e);
	// 		SimpleToast.show('퀴즈 목록을 불러오는 데 실패했습니다.');
	// 	}
	// };

	const setNumberOfCorrect = (number: number) => {
		try {
			dispatch(setQuizCorrectNumberAction(number));
		} catch (e) {
			console.warn('error in setCorrectNumber,', e);
			SimpleToast.show('맞힌 퀴즈 개수를 저장하는 데에 실패하였습니다.');
		}
	};

	const goToNext = () => {
		if (currentIndex === quizList?.length - 1) {
			// SimpleToast.show('마지막 문제입니다.');
			// setIsStart(false);
			setNumberOfCorrect(correctNumber);
			navigation.navigate('Result', {
				wrongQuizIndexList,
			});
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	useEffect(() => {
		// getQuizList(2);
		const backAction = () => {
			goBack();
			return true;
		};
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction,
		);
		return () => {
			backHandler.remove();
			setRetryCount(0);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setCurrentQuiz(quizList?.[currentIndex]);
		setIsSolved(false);
	}, [currentIndex, quizList]);

	useEffect(() => {
		resetValues();
	}, [retryCount]);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<Header goBack={goBack} title="Quiz" goBackIcon="left" />
			<SingleQuiz
				currentQuiz={currentQuiz}
				currentIndex={currentIndex}
				isSolved={isSolved}
				setIsSolved={(param) => setIsSolved(param)}
				correctNumber={correctNumber}
				setCorrectNumber={(param) => setCorrectNumber(param)}
				wrongQuizIndexList={wrongQuizIndexList}
				setWrongQuizIndexList={(param) => setWrongQuizIndexList(param)}
			/>
			<View style={styles.buttonsContainer}>
				{isSolved && (
					<TouchableOpacity onPress={goToNext}>
						{/* <Text>Next</Text> */}
						<Icon name="arrowright" size={24} color="black" />
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Quiz;

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white' },
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: 50,

		paddingRight: 20,
	},
});

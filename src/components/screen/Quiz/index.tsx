import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizList_action } from '../../../models/quiz';
import Header from './Header';
import SingleQuiz from './SingleQuiz';

interface QuizProps {
	navigation: any;
}

const Quiz = ({ navigation }: QuizProps) => {
	const dispatch = useDispatch();

	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isSolved, setIsSolved] = useState<boolean>(false);

	console.log('quizList in Quiz index, ', quizList);

	const goBack = () => {
		navigation.goBack();
	};

	const goToNext = () => {
		if (currentIndex === quizList?.length - 1) {
			SimpleToast.show('마지막 문제입니다.');
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	const getQuizList = async (numberOfQuiz: number = 10) => {
		try {
			const result = await dispatch(
				getQuizList_action({
					subPath: `?amount=${numberOfQuiz}&type=multiple`,
					params: null,
					data: null,
				}),
			);
			console.log('result in getQuizList, ', result);
		} catch (e) {
			console.warn('error in getQuizList, ', e);
			SimpleToast.show('퀴즈 목록을 불러오는 데 실패했습니다.');
		}
	};

	useEffect(() => {
		getQuizList(10);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<Header goBack={goBack} />
			<SingleQuiz
				currentIndex={currentIndex}
				isSolved={isSolved}
				setIsSolved={(param) => setIsSolved(param)}
			/>
			<View style={styles.buttonsContainer}>
				{isSolved && (
					<TouchableOpacity onPress={goToNext}>
						<Text>Next</Text>
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
	},
});

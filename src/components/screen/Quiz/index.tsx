import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { getQuizList_action } from '../../../models/quiz';

interface QuizProps {
	// navigation?: any;
}

const Quiz = () => {
	const dispatch = useDispatch();

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
		<View style={styles.container}>
			<Text>Quiz</Text>
		</View>
	);
};

export default Quiz;

const styles = StyleSheet.create({
	container: { flex: 1 },
});

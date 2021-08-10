import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface ResultProps {
	navigation: any;
}

const Result = ({ navigation }: ResultProps) => {
	const correctNumber = useSelector((state) => state.quiz.correctNumber);
	const quizTime = useSelector((state) => state.quiz.quizTime);
	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<View style={styles.container}>
			<Text>Result</Text>
			<Text>전체 문제: {quizList?.length}</Text>
			<Text>정답 개수: {correctNumber}</Text>
			<Text>오답 개수: {quizList?.length - correctNumber}</Text>
			<Text>소요 시간: {quizTime} </Text>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {},
});

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import wrongQuiz from '../../../models/wrongQuiz';

const WrongQuizList = () => {
	const wrongQuizList = useSelector((state) => state.wrongQuiz.wrongQuizList);

	console.log('wrongQuizList in WrongQuizList, ', wrongQuizList);

	return (
		<FlatList
			data={wrongQuizList}
			keyExtractor={(item, index) => item.question}
			renderItem={({ item, index }) => <Text>{item.question}</Text>}
			ListEmptyComponent={() => <Text>오답이 없습니다.</Text>}
			contentContainerStyle={
				wrongQuizList.length === 0 && styles.emptyComponent
			}
		/>
	);
};

export default WrongQuizList;

const styles = StyleSheet.create({
	emptyComponent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import wrongQuiz from '../../../models/wrongQuiz';
import WrongQuizItem from './WrongQuizItem';

const ITEM_HEIGHT = 80;

const WrongQuizList = () => {
	const wrongQuizList = useSelector((state) => state.wrongQuiz.wrongQuizList);

	console.log('wrongQuizList in WrongQuizList, ', wrongQuizList);

	return (
		<FlatList
			data={wrongQuizList}
			keyExtractor={(item, index) => item.question}
			renderItem={({ item }) => (
				<WrongQuizItem quizItem={item} itemHeight={ITEM_HEIGHT} />
			)}
			ListEmptyComponent={() => <Text>오답이 없습니다.</Text>}
			contentContainerStyle={
				wrongQuizList.length === 0 && styles.emptyComponent
			}
			// ItemSeparatorComponent={() => <View style={styles.separator} />}
			getItemLayout={(data, index) => ({
				length: ITEM_HEIGHT,
				offset: ITEM_HEIGHT * index,
				index,
			})}
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
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: 'gray',
	},
});

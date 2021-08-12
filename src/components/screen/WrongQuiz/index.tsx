/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../../shared/components/Header';
// import WrongQuizList from './WrongQuizList';
import WrongQuizList from './WrongQuizList';

interface WrongQuizProps {
	navigation: any;
}

const WrongQuiz = ({ navigation }: WrongQuizProps) => {
	const goBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header goBack={goBack} goBackText="Go Back" title="오답 노트" />
			<WrongQuizList navigation={navigation} />
		</SafeAreaView>
	);
};

export default WrongQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

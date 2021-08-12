import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';

interface WrongQuizProps {
	navigation: any;
}

const WrongQuiz = ({ navigation }: WrongQuizProps) => {
	const goBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header goBack={goBack} />
		</SafeAreaView>
	);
};

export default WrongQuiz;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

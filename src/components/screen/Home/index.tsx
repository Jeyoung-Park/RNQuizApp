/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';

interface HomeProps {
	// route:any,
	navigation: any;
}

const Home = ({ navigation }: HomeProps) => {
	const goToQuiz = () => {
		// console.log("퀴즈 풀기 버튼 클릭");
		navigation.navigate('Quiz');
	};
	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<SafeAreaView style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>React Native Quiz App</Text>
				<Text style={styles.descriptionText}>
					React Native로 제작된 퀴즈 앱입니다.
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.quizButton} onPress={goToQuiz}>
					<Text style={styles.quizButtonText}>퀴즈 풀기</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-around',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: { fontSize: 32 },
	descriptionText: {
		fontSize: 20,
		marginTop: 20,
	},
	buttonContainer: {
		flex: 1,
		// backgroundColor:'red',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	quizButton: {
		width: '80%',
		paddingVertical: 20,

		backgroundColor: 'gray',

		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 20,
	},
	quizButtonText: {
		fontSize: 16,
	},
});

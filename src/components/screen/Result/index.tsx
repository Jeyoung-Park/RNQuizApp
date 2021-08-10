import React, { useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-chart-kit';
import config from '../../../config';
import Header from './Header';
import { createTwoButtonAlert } from '../../../shared/Alert';

interface ResultProps {
	navigation: any;
}

const chartConfig = {
	backgroundColor: '#e26a00',
	backgroundGradientFrom: '#fb8c00',
	backgroundGradientTo: '#ffa726',
	decimalPlaces: 2, // optional, defaults to 2dp
	color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	style: {
		borderRadius: 16,
		// backgroundColor:'pink',
	},
	propsForDots: {
		r: '6',
		strokeWidth: '2',
		stroke: '#ffa726',
	},
};

const Result = ({ navigation }: ResultProps) => {
	const correctNumber = useSelector((state) => state.quiz.correctNumber);
	const quizTime = useSelector((state) => state.quiz.quizTime);
	const quizList = useSelector((state) => state.quiz.quizList.result?.results);

	const data = [
		{
			name: '정답',
			value: correctNumber,
			color: 'rgba(131, 167, 234, 1)',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: '오답',
			value: quizList?.length - correctNumber,
			color: '#F00',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
	];

	const goBack = () => {
		createTwoButtonAlert({
			message: '홈으로 돌아가시겠습니까?',
			text_ok: '홈으로 돌아가기',
			text_cancel: '취소',
			function_ok: () => {
				navigation.navigate('Home');
			},
		});
	};

	useEffect(() => {
		const backAction = () => {
			goBack();
			return true;
		};
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction,
		);
		return () => backHandler.remove();
	}, []);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<View style={styles.container}>
			<Header goBack={goBack} />
			<PieChart
				data={data}
				width={config.WINDOW_WIDTH}
				height={220}
				// chartConfig={chartConfig}
				accessor="value"
				backgroundColor="transparent"
				paddingLeft="20"
				center={[0, 0]}
				// absolute
				chartConfig={chartConfig}
				style={styles.pieChart}
			/>
			<View style={styles.contentContainer}>
				<Text>전체 문제: {quizList?.length}</Text>
				<Text>정답 개수: {correctNumber}</Text>
				<Text>오답 개수: {quizList?.length - correctNumber}</Text>
				<Text>소요 시간: {quizTime} </Text>
			</View>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white' },
	pieChart: {
		flex: 1,
		marginVertical: 8,
		borderRadius: 16,

		// backgroundColor: 'purple',

		justifyContent: 'center',
		alignItems: 'center',
	},
	contentContainer: {
		flex: 1,
		// backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'space-around',

		paddingBottom: 20,
	},
});

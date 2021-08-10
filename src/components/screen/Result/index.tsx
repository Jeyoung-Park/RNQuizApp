import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-chart-kit';
import config from '../../../config';

interface ResultProps {
	navigation: any;
}

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

	console.log('data in Result index, ', data);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<View style={styles.container}>
			<Text>Result</Text>
			{data && (
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
					chartConfig={{
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
					}}
					style={{
						marginVertical: 8,
						borderRadius: 16,
						// backgroundColor: 'purple',
					}}
				/>
			)}
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

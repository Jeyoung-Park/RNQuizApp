/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TimerProps {
	isStart: boolean;
}

interface TimeProps {
	seconds: number;
	minutes: number;
}

const getTimeInFormat = (time: TimeProps) => {
	const { seconds, minutes } = time;
	const resultSeconds = seconds < 10 ? `0${seconds}` : seconds;
	const resultMinutes = minutes < 10 ? `0${minutes}` : minutes;

	return `${resultMinutes}:${resultSeconds}`;
};

const Timer = ({ isStart }: TimerProps) => {
	console.log('isStart in Timer, ', isStart);

	const [time, setTime] = useState<TimeProps>({
		seconds: 0,
		minutes: 0,
	});

	useEffect(() => {
		const advanceTime = () => {
			setTimeout(() => {
				let nSeconds = time.seconds;
				let nMinutes = time.minutes;

				nSeconds++;

				if (nSeconds > 59) {
					nMinutes++;
					nSeconds = 0;
				}

				if (isStart) {
					setTime({ seconds: nSeconds, minutes: nMinutes });
				}
			}, 1000);
		};
		advanceTime();
	}, [time]);

	return (
		<View style={styles.container}>
			<Text>{getTimeInFormat(time)}</Text>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({
	container: {},
});

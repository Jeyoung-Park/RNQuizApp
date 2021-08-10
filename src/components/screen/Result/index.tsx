import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ResultProps {
	navigation: any;
}

const Result = ({ navigation }: ResultProps) => (
	<View style={styles.container}>
		<Text>Result</Text>
	</View>
);

export default Result;

const styles = StyleSheet.create({
	container: {},
});

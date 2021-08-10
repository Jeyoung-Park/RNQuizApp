import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
	goBack: () => void;
}

const Header = ({ goBack }: HeaderProps) => (
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	<View style={styles.container}>
		<TouchableOpacity style={styles.backButton} onPress={goBack}>
			<Text>Back</Text>
		</TouchableOpacity>
		<Text>Result</Text>
	</View>
);

export default Header;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',

		// backgroundColor: 'red',
		paddingVertical: 10,

		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
	backButton: {
		position: 'absolute',
		left: 0,
		paddingTop: 10,
		marginLeft: 16,
	},
});

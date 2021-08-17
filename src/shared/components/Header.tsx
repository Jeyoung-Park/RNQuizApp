import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
	goBack: () => void;
	title: string;
	// eslint-disable-next-line react/require-default-props
	goBackIcon: string;
}

const Header = ({ goBack, title, goBackIcon }: HeaderProps) => (
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	<View style={styles.container}>
		<TouchableOpacity style={styles.backButton} onPress={goBack}>
			{/* <Text>{goBackText}</Text> */}
			<Icon name={goBackIcon} size={24} color="black" />
		</TouchableOpacity>
		<Text style={styles.title}>{title}</Text>
		<View style={styles.backButton} />
	</View>
);

export default Header;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'red',
		paddingVertical: 20,
		paddingHorizontal:16,

		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
	backButton: {
		// width: 100,
		// height: 30,
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
	},
});

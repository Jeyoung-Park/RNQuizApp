import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreDataProps extends ReadDataProps {
	// key: string;
	value: any;
}

interface ReadDataProps {
	key: string;
}

export const storeData = async ({ key, value }: StoreDataProps) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		// saving error
		console.warn('error storing data, ', e);
	}
};

export const getData = async ({ key }: ReadDataProps) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		console.warn('error reading data, ', e);
	}
};

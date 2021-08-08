import { QUIZ_HOST } from '@env';
import { Dimensions, Platform } from 'react-native';

const config = {
	quiz_api: {
		host: QUIZ_HOST,
	},
};

const QUIZ_API_PATH = config.quiz_api.host;

const PLATFORM = Platform.select({
	android: 'android',
	ios: 'ios',
});

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default {
	QUIZ_API_PATH,
	PLATFORM,
	WINDOW_HEIGHT,
	WINDOW_WIDTH,
};

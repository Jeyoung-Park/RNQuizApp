import SimpleToast from 'react-native-simple-toast';
import { getQuizListAction } from '../../models/quiz';

interface NavigateToQuizProps {
	navigation: any;
	dispatch: any;
	number: number;
}

// eslint-disable-next-line import/prefer-default-export
export const navigateToQuiz = async ({
	navigation,
	dispatch,
	number = 10,
}: NavigateToQuizProps) => {
	try {
		await dispatch(
			getQuizListAction({
				// subPath: `?amount=${number}&type=multiple`,
				params: {
					amount: number,
					type: 'multiple',
				},
				data: null,
			}),
		);
		// console.log('result in getQuizList, ', result);
		navigation.navigate('Quiz');
	} catch (e) {
		console.warn('error in getQuizList, ', e);
		SimpleToast.show('퀴즈 목록을 불러오는 데 실패했습니다.');
	}
};

import axios, { Method } from 'axios';
import config from '../config';

const API_PATH = 'https://opentdb.com/api.php';

const invokeAPI =
	({ method }: { method: Method | undefined }) =>
	({ subPath, params, data }: { subPath: string; params: any; data: any }) => {
		console.log('config, ', config);

		const axiosObj = {
			method,
			// url: subPath ? `${config.QUIZ_API_PATH}${subPath}` : config.QUIZ_API_PATH,
			url: subPath ? `${API_PATH}${subPath}` : API_PATH,
			params,
			data,
		};

		console.log('axiosObj in restApi, ', axiosObj);

		return axios(axiosObj);
	};

export default invokeAPI;

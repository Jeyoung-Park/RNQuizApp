import axios, { Method } from 'axios';
import config from '../config';

const invokeAPI = ({method, path}:{method:Method|undefined, path:string, }) => ({subPath, params, data}:{subPath:string, params:any, data: any,}) => {

    const axiosObj = {
        method, 
        url: subPath?`${config.QUIZ_API_PATH}${subPath}`:config.QUIZ_API_PATH,
        params,
        data,
    }

    return axios(axiosObj);
}

export default invokeAPI;
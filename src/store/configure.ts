import { createStore } from "redux"
import reducer from '../models';

const configure = () => {
    return createStore(
        reducer, 
    )
}

export default configure;
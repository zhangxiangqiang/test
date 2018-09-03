import * as TYPES from '../action-types';
import {checkLogin} from '../../api/person';


let person = {
    checkLogin() {
        return async dispatch => {
            let data = await checkLogin();
            if(data.code===0){
                dispatch({
                    type: TYPES.GET_LOGIN,
                });
            }
        }
    }
};

export default person;
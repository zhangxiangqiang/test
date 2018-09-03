import * as TYPES from '../action-types'
import {getCartInfo} from '../../api/cart'



let cart = {
    getCartInfo(state){
        return async dispatch=>{
            let data = await getCartInfo(state);
            if(data.code === 0){
                dispatch({
                    type: TYPES.GET_UNPAY,
                    data: data.data
                });
            }
        }
    },
    getPay(state){
        return async dispatch=>{
            let data = await getCartInfo(state);
            console.log(data.data,'pay的数据');
            if(data.code === 0){
                dispatch({
                    type: TYPES.GET_UNPAY,
                    data: data.data
                });
            }
        }
    }
};

export default cart;
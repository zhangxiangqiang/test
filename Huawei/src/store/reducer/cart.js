import * as TYPES from '../action-types'


let INIT_STATE = {
    unPay:[],
    pay:[]
};

export  default function cart(state=INIT_STATE, action) {
    state =  JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.GET_UNPAY:
            state.unPay = action.data;
            break;
        case TYPES.GET_PAY:
            state.pay = action.data;
            break;
    }
    return state;
}
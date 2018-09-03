import * as TYPES from '../action-types'

let INIT_STATE = {
    unPay:[],
    pay:[],
    isLog: false
};

export  default function person(state=INIT_STATE, action) {
    state =  JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.GET_LOGIN:
            state.isLog = true;
            break;
    }
    return state;
}
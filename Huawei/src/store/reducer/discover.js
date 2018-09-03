import * as TYPES from '../action-types';

let INIT_STATE = {
    discoverData:[]

};
export default function page (state = INIT_STATE, action){
    state = JSON.parse(JSON.stringify(state));

        switch (action.type){

        //获取口碑好评列表信息
        case TYPES.DISCOVER_QUERY_CHANNEL:
        // let {result,discoverType}=discoverType;
        //state.discoverType=discoverType;
        let {code,data}=action.discoverData;
        if(parseFloat(code)===0){
            state.discoverData = data;


        }
        break;
    }
    return state;
}
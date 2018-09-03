import * as TYPES from '../action-types';
let INIT_STATE={
    productData:[],
    huaData:[],
    rongyaoData:[],
    computerData:[]
};


export default function category(state=INIT_STATE,action){
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.CATEGORY_QUERY_PROGUCT:

            let {code,data}=action.productResult;
            if(parseFloat(code)===0){
                state.productData=data;
                break;
                }
        case TYPES.CATEGORY_QUERY_HUAWEI:

            let huaweiCode=action.huaweiResult.code,
                hData=action.huaweiResult.data;

            if(parseFloat(huaweiCode)===0){
                state.huaData=hData;
                break;
                }
        case TYPES.CATEGORY_QUERY_RONGYAO:
            let rongyaoCode=action.rongYaoResult.code,
                rongData=action.rongYaoResult.data;
            if(parseFloat(rongyaoCode)===0){
                state.rongyaoData=rongData;
                break;
            }
        case TYPES.CATEGORY_QUERY_COMPUTER:
            let computerCode=action.computerResult.code,
                compData=action.computerResult.data;
            if(parseFloat(computerCode)===0){
                state.computerData=compData;
                break;
            }
}
    return state;
}




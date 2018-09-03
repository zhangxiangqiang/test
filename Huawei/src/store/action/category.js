import * as TYPES from '../action-types';
import {cateQueryInfo,cateQueryHuaweiInfo,cateQueryRongYaoInfo,cateQueryComputerInfo} from '../../api/category';

let category={
    cateQueryInfo(){

        return async dispatch=>{

            let productResult=await cateQueryInfo();

            dispatch({
                type:TYPES.CATEGORY_QUERY_PROGUCT,
                productResult
            })
        }
    },
    cateQueryHuaWei(){
        return async dispatch=>{
            let huaweiResult=await cateQueryHuaweiInfo();

            dispatch({
                type:TYPES.CATEGORY_QUERY_HUAWEI,
                huaweiResult

            })
        }
    },
    cateQueryRongYao(){
        return async dispatch=>{
            let rongYaoResult=await cateQueryRongYaoInfo();
            dispatch({
                type:TYPES.CATEGORY_QUERY_RONGYAO,
                rongYaoResult
            })
        }

    },
    cateQuerycomputer(){
        return async dispatch=>{
            let computerResult=await cateQueryComputerInfo();
            dispatch({
                type:TYPES.CATEGORY_QUERY_COMPUTER,
                computerResult
            })
        }
    }

};
export default category;







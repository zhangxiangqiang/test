import * as TYPES from '../action-types';
import {queryDiscover} from '../../api/discover';

let discover={
    queryDiscover(){
        return async dispatch=>{

            let discoverData= await  queryDiscover();

            dispatch({
                type:TYPES.DISCOVER_QUERY_CHANNEL,
                discoverData,

            });
        }
    }
};
export  default  discover;
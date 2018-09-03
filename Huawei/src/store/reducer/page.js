import * as TYPES from '../action-types';


let INIT_STATE = {
    bannerData: [],
    postdata: [],
    searchData: []

}


export default function page (state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case TYPES.PAGE_QUERY_BANNER:
            let {code,data} = action.bannerData;
            if(parseFloat(code) === 0) {
                state.bannerData = data;
    }
            break;
        case  TYPES.PAGE_QUERY_POSTER:
            let postData = action.postData.data,
                postCode = action.postData.code;
            if(parseFloat(postCode) === 0) {
                state.postdata = postData;
            }
            break;
        case TYPES.PAGE_QUERY_SEARCHINFO:
            let searchCode = action.result.code,
                searchData = action.result.data;

            if(searchCode === 0) {
                state.searchData = searchData;
            }
            break;
       /* case TYPES.PAGE_QUERY_LIST:
            let {result} = action, //  如果没有数据 试试 action.dataList
                listData = action.dataList.data;
            if(parseFloat(result.code) === 0) {
                state.dataList.data = result.data;
            }*/
    }

    return state;
}
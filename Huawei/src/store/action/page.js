import * as TYPES from '../action-types';
import {queryBanner,queryPoster,querySearchInfo} from '../../api/page';



let page = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.PAGE_QUERY_BANNER,
                bannerData
            });
        }
    },
    queryPoster () {
        return async dispatch => {
            let postData = await queryPoster();
            dispatch({
                type: TYPES.PAGE_QUERY_POSTER,
                postData
            });
        }
    },

    //搜索
    querySearch(payload) {
        return async dispatch => {
            let result = await querySearchInfo(payload);
            dispatch({
                type: TYPES.PAGE_QUERY_SEARCHINFO,
                result
            });
        }
    },
}

export default page;
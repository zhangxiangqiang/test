import axios from './index';

// 产品详情

//产品轮播图(详情)
export function queryInfoBanner(productId) {
    return axios.get('/product/info',{
        params:{
            productId
        }
    });
}






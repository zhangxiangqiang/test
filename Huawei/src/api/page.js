import axios from './index';

//请求轮播图数据
export function queryBanner () {
    return axios.get('/product/banner');
}

//请求单张图片数据
export function queryPoster () {
    return axios.get('/product/poster');
}

// 请求图文数据
export function queryInfo (payload) {
    return axios.get('/product/list',{
        params: payload
    });
}

//搜索内容 请求
export function querySearchInfo (type) {
    return axios.get('/product/list',{
        params: {
            type
        }
    });
}
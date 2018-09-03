import axios from './index'
/*为您推荐*/
export  function cateQueryInfo(){
    return axios.get('/category/commend')
}

/*华为手机*/

export function cateQueryHuaweiInfo(){
    return axios.get('/category/huawei_ph')
}


export function cateQueryRongYaoInfo(){
    return axios.get('/category/rongyao_ph')
}

export function cateQueryComputerInfo(){
    return axios.get('/category/rongyao_ipd')
}
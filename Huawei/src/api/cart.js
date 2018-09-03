import axios from './index'
// 加入购物车
export function addCart(courseID) {
    return axios.post('/store/add', {
        courseID
    });
}

// 删除商品
export function deleteCart(courseID,type) {
    return axios.post('/store/remove',{
        courseID,
        type
    })
}

// 获取所有购物信息
export function getCartInfo(state=0) {
    return axios.get('/store/info',{
        params:{
            state
        }
    });
}

//支付
export function pay(storeID) {
    return axios.post('/store/pay',{
        storeID
    })
}

//



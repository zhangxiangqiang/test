import axios from './index';

//注册

export function register(payload) {
    return axios.post('/personal/register',payload)
}

// 登录

export function login(payload) {
    return axios.post('/personal/login', payload)
}

// 验证是否登录
export function checkLogin(payload) {
    return axios.get('/personal/login', payload)
}

// 获取个人信息
export function getPersonInfo() {
    return axios.get('/personal/info')
}

//=>退出登录
export function exitLogin() {
    return axios.get('/personal/out');
}

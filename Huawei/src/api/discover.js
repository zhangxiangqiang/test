import  axios from './index';

//获取口碑好评的列表信息

export function queryDiscover(){
   // let{limit=10,page=1,type='all' } =payload;
    return axios.get('/discover/goods')

}
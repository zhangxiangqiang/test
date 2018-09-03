import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
/*import '../../static/less/category/cate-huawei.less';*/
import action from '../../store/action/index'


/*import '../../static/img/wode/category/cate-huawei.less';*/

class Huawei extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    async componentDidMount() {
        let {cateQueryHuaWei, huaData} = this.props;
        /*console.log(huaweiData);*/

        if (!huaData || huaData.length === 0) {
            cateQueryHuaWei();
        }

    }
    render(){
        let {huaData}=this.props;
        return <div className='huaweiBox'>
            <h3>-- 精选手机--</h3>
            <div className='huaweiList'>
                <ul>
                    {huaData && huaData.length !== 0 ? (huaData.map((item, index) => {
                            let {src, title} = item;
                            title = title.substr(0, 6);
                            return <li key={index}>
                                <Link to='/home/info'>
                                    <img src={src} alt=""/>
                                    <p>{title}</p>
                                </Link>
                            </li>
                        }
                    )) : ''}

                </ul>


            </div>
        </div>

}}
export default connect(state=>({...state.category}),action.category)(Huawei);


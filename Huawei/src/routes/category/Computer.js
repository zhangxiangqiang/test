import React from 'react';



/*import '../../static/img/wode/category/cate-huawei.less';*/

import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import action from '../../store/action/index';






class Computer extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    async componentDidMount() {
        let {cateQuerycomputer,computerData}=this.props;
        if (!computerData || computerData.length === 0) {
            cateQuerycomputer();}
            }

    render() {
        let {computerData} = this.props;
        return <div className='computerBox'>
            <h3>-- 精选笔记本--</h3>
            <div className='computerList'>
                <ul>
                    {computerData && computerData.length !== 0 ? (computerData.map((item, index) => {
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


export default connect(state=>({...state.category}),action.category)(Computer);

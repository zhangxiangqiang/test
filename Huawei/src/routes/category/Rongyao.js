import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import action from '../../store/action/index';
class Rongyao extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){
       let{rongyaoData, cateQueryRongYao}=this.props;
        if (!rongyaoData || rongyaoData.length === 0) {
            cateQueryRongYao();
        }
    }
    render(){
        let {rongyaoData}=this.props;
        return <div className='rongyaoBox'>
            <h3>-- 精选手机--</h3>
            <div className='rongyaoList'>
                <ul>
                    {rongyaoData && rongyaoData.length!==0?(rongyaoData.map((item,index)=>{
                            let {src,title}=item;
                            title = title.substr(0, 6);
                            return <li key={index}>
                                <Link to='/home/info'>
                                    <img src={src} alt=""/>
                                    <p>{title}</p>
                                </Link>
                            </li>
                        }
                    )):''}

                </ul>
            </div>

            <h3> -- 手机分类 --</h3>
            <div className='rongyaoList'>
                <ul>
                    {rongyaoData.slice(7).map((item, index) => {
                        let {src, title} = item;
                        title = title.substr(0, 6);
                        return <li key={index}>
                            <Link to='/home/info'>

                                <img src={src} alt=""/>

                                <p>{title}</p>

                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }
}
export default connect(state=>({...state.category}),action.category)(Rongyao);
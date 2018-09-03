import React from 'react';
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'


import {Icon} from 'antd';

 class NavTop extends React.Component {
    constructor (props,context){
        super(props,context);
    }

    render(){
        let reg = /(^\/home$)|(category)|(^\/$)/g,
           path = this.props.location.pathname;
        if(reg.test(path)){
           return <div className='searchBox'>
               <div className='search'>
                   <input type="text" placeholder={'HUAWEI P20 '} onClick={this.handleClick}/>
                   <Icon type='search' className='searchIcon' onClick={this.handleClick}/>
                   <Icon type='bell' className='bell'/>
               </div>
           </div>
       }
       return "";
    };

    handleClick = () => {
        this.props.history.push('/home/search');
    };
}

export default withRouter(NavTop);
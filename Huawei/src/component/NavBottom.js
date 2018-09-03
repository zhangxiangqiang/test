import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon,Badge} from 'antd';
import action from '../store/action'

import Person from '../routes/Person'
import { getCartInfo } from '../api/cart'

class NavBottom extends React.Component {
    constructor (props){
        super(props);
        this.state= {
            unpay: 0
        }
    }

    async componentDidMount(){
        this.getUnpay(this.props);
        this.props.checkLogin();
    }

    componentWillReceiveProps(nextProps){
        this.getUnpay(nextProps);
    }

    getUnpay =async (props)=>{
        if(props.unPay.length===0){
            let unpay = await getCartInfo(0);
            if(parseFloat(unpay.code)===0){
                this.setState({
                    unpay:unpay.data.length
                });
                return;
            }
        }
        this.setState({
            unpay: props.unPay.length
        });
    };

    render(){

        let reg = /\/home\/info/g,
            path = this.props.location.pathname;
        if(reg.test(path)){
            return ""
        }

        return <footer className='footerNavBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <p>首页</p>
            </NavLink>
            <NavLink to='/category'>
                <Icon type='solution'/>
                <p>分类</p>
            </NavLink>
            <NavLink to='/discover'>
                <Icon type="coffee" />
                <p>发现</p>
            </NavLink>
            <NavLink to='/cart' className={'unpay'}>
                <Badge count={this.state.unpay}>
                    <Icon type="shopping-cart" />
                </Badge>
                <p>购物车</p>
            </NavLink>
            <NavLink to='/person'>
                <Icon type="user" />
                <p>我的</p>
            </NavLink>
        </footer>;
    };
}

export default withRouter(connect(state=>state.cart,action.person)(NavBottom));
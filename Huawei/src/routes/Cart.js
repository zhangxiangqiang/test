import React from 'react'
import {connect} from 'react-redux'

import {Icon, Checkbox, message, Button} from 'antd'
import {Link} from 'react-router-dom'

import action from '../store/action'
import {checkLogin} from '../api/person'

//css
import '../static/less/cart.less'
import {addCart, deleteCart, getCartInfo, pay} from "../api/cart";

//api
import {queryInfo} from '../api/page';

message.config({
    top: 400,
    duration: 2,
    maxCount: 3,
});

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isEdit: true,
            ary: [],
            num: {},
            checkAll: true,
            productList: []
        }
    }

    onChange(e, ev) {
        this.state.ary.forEach(item => {
            item.id === e ? item.check = ev.target.checked : null;
        });
        let checkAll;
        if (this.state.ary.find(item => item.check === false)) {
            checkAll = false
        }
        if (this.state.ary.every(item => item.check === true)) {
            checkAll = true
        }
        this.setState({
            ary: this.state.ary,
            checkAll
        })
    }

    async componentDidMount() {

        this.getData(this.props);


        let productList = await queryInfo({
            limit: 15
        });

        if(productList.code === 0){

            this.setState({
                productList: productList.data.slice(6)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        // 挂载后派发一次就行了，这里完全没必要再派发，数据已经更新，准备重新渲染组件？？？
        this.getData(nextProps);
    }

    getData = async (props) => {
        if (props.unPay.length === 0) {
            let unpay = await getCartInfo(0);
            if (parseFloat(unpay.code) === 0) {
                this.handleAry(unpay.data);
                return;
            }
        }
        this.handleAry(props.unPay);
    };

    handleAry = (data) => {
        let d = JSON.parse(JSON.stringify(data));
        let s = this.handleData(d);
        this.setState({
            ary: s.data,
            num: s.num
        });
    };

    handleData = (d) => {
        // 去重 //统计
        let obj = {}, num = {};
        let data = JSON.parse(JSON.stringify(d));
        for (let i = 0; i < data.length; i++) {
            let item = data[i],
                e = parseFloat(item.id);

            if (obj.hasOwnProperty(e)) {
                data[i] = data[data.length - 1];
                data.length--;
                i--;
                num[e]++;
                continue;
            }
            obj[e] = item;
            num[e] = 1;
        }
        obj = null;
        data = data.map(item => {
            return {...item, check: true}
        });
        return {
            data,
            num
        }
    };

    success = async (id) => {
        let result = await checkLogin();
        if (result.code === 0) {
            let data = this.state.ary.filter(item => item.check === true),
                num = this.state.num,
                ary = data.map(item => {
                    id = item.id;
                    return [id,num[id]]
                });
            ary = JSON.stringify(ary);
            let timer = setTimeout(async ()=>{
                result = await pay(ary);
                if (parseFloat(result.code) === 0) {
                    this.props.getCartInfo(1);
                    this.props.getCartInfo(0);
                }
            },1000);
            message.success('主人，神奇的机器人已经全速帮您完成支付哦', 1);
            return;
        }

        this.props.history.push('/person/login');
    };


    render() {
        let {isEdit, ary, num, checkAll} = this.state;
        if(this.state.productList.length===0)return '';

        let total = 0;
        let data = ary.filter(item => item.check === true);
        data.forEach(item => {
            total += item.cur * num[item.id]
        });

        if (ary.length === 0) {
            return <div className={'cart'}>
                <header className={'clearfix'}>
                    <span className={'left'}>购物车</span>
                </header>
                <div className="go">
                    <p><Icon type="shopping-cart"/>你的购物车空如也，快去选购商品吧</p>
                    <div><Link to={'/home'}>
                        去逛逛
                    </Link></div>
                </div>

                <ul className={'clearfix pro'}>
                    {this.state.productList.map((item,index) => {
                        let {src,title,} = item;
                        return <li key={index}>
                            <Link to='/home/info'>
                                <div><img src={src} alt=""/></div>
                                <p>{title}</p>
                            </Link>
                        </li>
                    })}
                </ul>

            </div>
        }

        return <div className={'cart'}>
            <header className={'clearfix'}>
                <span className={'left'}>购物车</span>
                <span className={'right'} onClick={ev => {
                    this.setState({
                        isEdit: !isEdit
                    });
                }
                }>{isEdit ? '编辑' : '完成'}</span>
            </header>
            <ul className="content">
                {ary ? ary.map((item, index) => {
                    let e = item.id;
                    return <li className={'clearfix'} key={index}>
                        <Checkbox checked={item.check} onChange={this.onChange.bind(this, e)}/>
                        <div className={'imgBox'}><img
                            src={item.src}
                            alt=""/></div>
                        <div className={'desc'}>
                            <p>{item.desc}</p>

                            {isEdit ? <div className={'edit-num clearfix'}>
                                <span>¥ {item.cur}</span><b><Icon type="close"/>{num[e]}</b>
                            </div> : <span className={'item-num clearfix'}>
                                <Icon type="minus" onClick={this.handleMinus.bind(this, e, num[e])}/>
                                <i className={'cur-num'}>{num[e]}</i>
                                <Icon type="plus" onClick={this.handleAdd.bind(this, e)}/>
                        </span>}
                        </div>
                    </li>
                }) : ""}
            </ul>
            <div className={'bg'}>

            </div>
            <div className={'pay'}>
                <Checkbox checked={checkAll} onChange={e => {
                    let cur = !this.state.checkAll;
                    this.state.ary.forEach(item => {
                        item.check = cur
                    });
                    this.setState({
                        checkAll: cur
                    });
                }
                }/>
                <span>全选</span>
                {isEdit ? <div className={'dele'}><span>总计：<b>{total}</b></span>
                    <button className={'balance'} type="primary" onClick={this.success}>结算（{total}）</button>
                </div> : <div className={'dele'}>
                    <button onClick={this.handleMinus.bind(this)}>删除</button>
                </div>}
            </div>
        </div>;
    }


    handleAdd = async (id) => {
        console.log(id, '77777777777');
        let result = await addCart(id);
        if (parseFloat(result.code) === 0) {
            this.props.getCartInfo(0); // 获取未支付
        }
    };

    handleMinus = async (id, num) => {
        if (num === 1) {
            return;
        }
        let result;

        if (typeof id === 'number') {
            result = await deleteCart(id, 1); // 删除一个
        } else if (this.state.checkAll) {
            result = await deleteCart(id, 3); // 清空
        } else {
            let data = this.state.ary.filter(item => item.check === true),
                ary = data.map(item => item.id);
            ary = JSON.stringify(ary);
            result = await deleteCart(ary, 2);
        }
        if (parseFloat(result.code) === 0) {
            this.props.getCartInfo(0);
        }
    }
}

export default connect(state => state.cart, action.cart)(Cart);
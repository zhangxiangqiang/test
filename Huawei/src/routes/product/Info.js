
import React from 'react'
import {connect} from 'react-redux'
import {HashRouter,Route,NavLink,Switch,Link} from 'react-router-dom'

import {Icon, Badge} from 'antd'
import Qs from 'qs'

// action
import action from '../../store/action'

import Banner from './info/Banner'
import Desc from './info/Desc'
import Param from './info/Param'
import Recommend from "./info/Recommend";

import '../../static/less/homeInfo/home_info.less'
import {queryInfoBanner} from "../../api/product";

//api
import {addCart} from '../../api/cart'
import {getCartInfo} from '../../api/cart'
import {queryInfo} from '../../api/page';

class Info extends React.Component{
    constructor(props,context){
        super(props, context);
        this.state = {
            data: {},
            num: 0,
            productList: []
        }
    };

    async componentDidMount(){
        this.getUnpay(this.props);

        let {id = 0} = Qs.parse(this.props.location.search.slice(1))||{};
        this.id = id;
        let data = await queryInfoBanner(this.id),
        productList = await queryInfo({
            limit: 6
        });

        if(parseFloat(data.code)===0 && productList.code === 0){
            this.setState({
                data:data.data,
                productList: productList.data
            })
        }



    }


    componentWillReceiveProps(nextProps,nextState ){
        // 要记住双will中获取的属性和状态都是没更新之前端哦，有用nextProps，和nextState获取
        this.getUnpay(nextProps);
    }

    getUnpay =async (nextProps)=>{
        if(nextProps.unPay.length===0){
            let unpay = await getCartInfo(0);
            if(parseFloat(unpay.code)===0){
                this.setState({
                    num:unpay.data.length
                });
                return;
            }
        }
        this.setState({
            num: nextProps.unPay.length
        });
    };


    render(){
        let {data}  = this.state;

        return <div>
            <div className={'homeInfo'}>
                <div>
                    <header >
                        <a href="javascript:;" onClick={()=>{
                            this.props.history.go(-1);
                        }
                        }><Icon type="arrow-left" /></a>
                        <NavLink to={`/home/info/banner?id=${this.id}`}>商品</NavLink>
                        <NavLink to={'/home/info/desc'}>详情</NavLink>
                        <NavLink to={'/home/info/param'}>参数</NavLink>
                        <NavLink to={'/home/info/recommend'}>评价</NavLink>
                        <NavLink to={'/home'}><Icon type="ellipsis" /></NavLink>
                    </header>
                    <Switch>
                        <Route path={'/home/info'} exact component={Banner}/>
                        <Route path={'/home/info/banner'} exact component={Banner}/>
                        <Route path={'/home/info/desc'} component={Desc}/>
                        <Route path={'/home/info/param'} component={Param}/>
                        <Route path={'/home/info/recommend'} component={Recommend}/>
                    </Switch>
                    <div className={'price'}>
                        <div className={'benefit'}>
                            <div className={'price-t'}>
                                <span className={'mark'}>￥</span>
                                <span>{data.cur}</span>
                            </div>
                            <div className={'price-b'}>
                                <span className={'limit'}>限时特惠</span>
                                <span className={'through'}>￥&nbsp;{data.previous}</span>
                            </div>
                        </div>
                        <div className={'finish'}>
                            {/*<p>距离结束还剩</p>*/}
                            {/*<div>1111</div>*/}
                        </div>

                    </div>
                    <div className={'content'}>
                        <header>{data.title}</header>
                        <p>{data.desc}</p>
                    </div>
                    <div className={'match-product clearfix'}>
                        <span>配</span>
                        <div className={'match-img'}>
                            <div>
                                <img src={data.png1} alt=""/>
                            </div>
                            <div>
                                <img src={data.png2} alt=""/>
                            </div>
                        </div>
                        <p>选择 &nbsp;&nbsp;<Icon type="right" /></p>
                    </div>
                    <div className={'discount'}>
                        <span><Icon type="check-circle-o" />限时特价</span>
                        <span><Icon type="check-circle-o" />整点赠送</span>
                        <span><Icon type="check-circle-o" />商品赠券</span>
                        <span><Icon type="check-circle-o" />支持分期</span>
                        <span className={'discount-last'}><Icon type="right" /></span>
                    </div>
                    <div className={'configure'}>
                        <div className={"configure-item  clearfix"}>
                            <i className={'configure-title'}>
                                颜色
                            </i>
                            <div>
                                <span>铂金光</span>
                                <span className={'active'}>极光蓝</span>
                                <span>幻夜黑</span>
                                <span>魅焰红</span>
                            </div>
                        </div>
                        <div className={"configure-item clearfix"}>
                            <i className={'configure-title'}>
                                制式
                            </i>
                            <div>
                                <span className={'active'}>全网通标配版</span>
                                <span>全网尊通享版</span>
                                <span>全网通高配版</span>
                            </div>
                        </div>
                        <div className={"configure-item  clearfix"}>
                            <i className={'configure-title'}>
                                容量
                            </i>
                            <div>
                                <span className={'active'}>4GB+32GB</span>
                                <span className={'lighten'}>4GB+128GB</span>
                                <span className={'lighten'}>4GB+64GB</span>
                            </div>
                        </div>
                        <div className={"configure-item clearfix"}>
                            <i className={'configure-title'}>
                                套餐
                            </i>
                            <div>
                                <span className={'active'}>官方标配</span>
                            </div>
                        </div>
                        <div className={"configure-item clearfix"}>
                            <i className={'configure-title'}>
                                定制
                            </i>
                            <div>
                                <span className={'active'}>无定制</span>
                                <span className={'lighten'}>后壳定制</span>
                            </div>
                        </div>
                        <div className={"configure-item clearfix"}>
                            <i className={'configure-title num'}>
                                数量
                            </i>
                            <div>
                                <span className={'item-num clearfix'}>
                                    <Icon type="minus" />
                                    <i className={'cur-num'}>1</i>
                                    <Icon type="plus" />
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="safe">
                            <Icon type="safety"/>
                            <span>保障服务</span>
                            <span>延保/碎屏保</span>
                            <Icon type="right" className={'right'}/>
                        </div>
                        <div className="postage">
                            <b>服务</b>
                            <span>已满48元包邮</span>
                            <span>华为终端 发货&售后</span>
                            <Icon type="right"  className={'right'}/>
                        </div>
                        <div className="replace">
                            <Icon type="sync" />
                            <span>以旧换新（旧机回收最高抵5599元）</span>
                            <Icon type="right" className={'right'}/>
                        </div>
                        <div className="user-comment">
                            <b>用户评价（46120条）</b>
                            <span>查看全部评价</span>
                            <Icon type="right" className={'right'}/>
                        </div>
                    </div>
                    <div className="comment">
                        <div className={'comment-content clearfix'}>
                            <span>反应灵敏（31753）</span>
                            <span>颜值惊艳（31511）</span>
                            <span>手感服帖（31493）</span>
                            <span>操作智能（31146）</span>
                        </div>
                        <div className={'user clearfix'}>
                            <div className={'user-header'}>
                                <div className={'image'}>
                                    <img src="https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png" alt=""/>
                                </div>
                                <div className={'user-date'}>
                                    <p>111</p>
                                    <p>2018.07.05</p>
                                </div>
                                <div className={'user-agree'}>
                                    <Icon type="like-o" />
                                    <i>&nbsp;0</i>
                                </div>

                            </div>
                            <div className="comment-desc">
                                用户未填写评价内容
                            </div>
                        </div>
                    </div>
                    <div className="recommend">
                        <header>
                            推荐商品
                        </header>
                        <ul className={'clearfix'}>
                            {this.state.productList.map((item,index) => {
                                let {src,title,id} = item;

                                return <li key={index}>
                                    <Link to={`/home/info?id=${id}`}>
                                        <div><img src={src} alt=""/></div>
                                        <p>{title}</p>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="add-cart">
                        <ul>
                            <li>
                                <Link  to={'/home'}>
                                    <Icon type="home" />
                                    <p>首页</p>
                                </Link>

                            </li>
                            <li>
                                <Link to={'/cart'}>
                                    <Badge count={this.state.num}>
                                        <Icon type="shopping-cart" />
                                    </Badge>
                                    <p>购物车</p>
                                </Link>

                            </li>
                            <li>
                                <Link to={'/home'}>
                                    <Icon type="customer-service" />
                                    <p>客服</p>
                                </Link>
                            </li>
                            <li className={'add'} onClick={this.handleAdd}>加入购物车</li>
                            <li className={'add imme'}>立即购买</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>;
    }

    handleAdd = async ev=>{
        let {products} = this.props, {id} = this;

        let result =  await addCart(id);
        if(parseFloat(result.code)===0){
            this.props.getCartInfo(0); // 获取未支付

        }
    }
}

export default connect(state=>({...state.cart}), action.cart)(Info);
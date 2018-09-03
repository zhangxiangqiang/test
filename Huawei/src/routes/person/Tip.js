import React from 'react';
import {connect} from 'react-redux';
import {Alert, Button} from 'antd';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import '../../static/less/person/person.less';

import action from '../../store/action'

import {getPersonInfo,checkLogin,exitLogin} from '../../api/person'

class Tip extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            style: {display: "none"},
            personInfo: {},
            isLogin:false
        };

    }

    async componentDidMount() {
        let data = await getPersonInfo();
        if (data.code === 0) {
            this.setState({
                personInfo: data
            });
        }

        let result = await checkLogin();

        if (result.code === 0) {
            this.setState({
                isLogin:true
            });
        }
    }


    async componentWillReceiveProps() {
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({isLogin});

        // 更新的时候
    }



    render() {

        let {data} = this.state.personInfo;

        return <div className='personBox'>
            <header className='headerBox'>
                <div className='basebox'>
                    <Link to='/person/login'><span>{this.state.isLogin ? `欢迎您，${data.name}` : '登录/注册'}</span></Link>

                    <a href="javascript:;"><span className='p1'>享受更多会员权益</span></a>
                    <Icon className='Icon' type='bell' style={{
                        fontSize: '.5rem'
                    }}/>
                </div>
            </header>

            <div className='under clearfix'>
                <div className='head'>
                    <i></i>
                </div>
                <div className='box1'>
                    <ul className='clearfix'>
                        <li>
                            <Icon className='icon' type="bank" style={{
                                fontSize: '.4rem'
                            }}/>
                            <span>积分</span>
                            <p>--分</p>

                        </li>
                        <li>
                            <Icon className='icon' type="red-envelope" style={{
                                fontSize: '.4rem'
                            }}/>
                            <span>优惠券</span>
                            <p>--分</p>

                        </li>
                        <li>

                            <Icon className='icon' type="pay-circle-o" style={{
                                fontSize: '.4rem'
                            }}/>
                            <span>代金券</span>
                            <p>--分</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/*我的订单*/}
            <div className='order'>
                <div className='myorder'>
                    <h3>我的订单</h3>

                    <div className='myorde2'><a href="javascript:;">全部订单</a></div>

                </div>
                <div className='ordeBox'>
                    <ul>
                        <li className='orde1'>
                            <a href="javascript:;">
                                <i></i>
                                <span>待付款</span>
                            </a>
                        </li>
                        <li className='orde2'>
                            <a href="javascript:;">
                                <i></i>
                                <span>待收货</span>
                            </a>
                        </li>
                        <li className='orde3'>
                            <a href="javascript:;">
                                <i></i>
                                <span>待评价</span>
                            </a>
                        </li>
                        <li className='orde4'>
                            <a href="javascript:;">
                                <i></i>
                                <span>退换货</span>
                            </a>
                        </li>
                        <li className='orde5'>
                            <a href="javascript:;">
                                <i></i>
                                <span>回收单</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            {/*我的Vmall*/}
            <div className='vmall'>
                <div className='vamallH'>
                    <h3>我的Vmall</h3>
                </div>
                <div className='memberBox'>
                    <ul className=' member clearfix'>
                        <li className='member1'>
                            <a href="javascript:;">
                                <i></i>
                                <span>会员频道</span>
                            </a>
                        </li>
                        <li className='member2'>
                            <a href="javascript:;">
                                <i></i>
                                <span>实名认证</span>
                            </a>
                        </li>

                        <li className='member3'>
                            <a href="javascript:;">
                                <i></i>
                                <span>收货地址</span>
                            </a>
                        </li>

                        <li className='member4'>
                            <a href="javascript:;">
                                <i></i>
                                <span>优享购</span>
                            </a>
                        </li>


                    </ul>
                    <ul className='bestBox clearfix'>
                        <li className='best style'>
                            <a href="javascript:;">
                                <i></i>
                                <span>优购码</span>
                            </a>
                        </li>
                        <li className='best1 style'>
                            <a href="javascript:;">
                                <i></i>
                                <span>预约记录</span>

                            </a>
                        </li>
                        <li className='best2 style'>
                            <a href="javascript:;">
                                <i></i>
                                <span>邀请有礼</span>
                                <p>最高返利4%</p>

                            </a>
                        </li>
                        <li className='best3 '>
                            <a href="javascript:;">
                                <i></i>
                                <span>帐号中心</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/*图片*/}
            </div>

            {/*图片*/}
            <div className='imgBox'>
                <i></i>
            </div>

            {/*我的服务*/}
            <div className='myservice'>
                <div className='service'>
                    <h3>我的服务</h3>
                </div>

                <div className='serviceBox'>
                    <ul className=' internet clearfix'>

                        <li className='internet1'>
                            <a href="javascript:;">
                                <i></i>
                                <span>以旧换新</span>
                            </a>
                        </li>
                        <li className='internet2'>
                            <a href="javascript:;">
                                <i></i>
                                <span>手机充值</span>
                            </a>
                        </li>

                        <li className='internet3'>
                            <a href="javascript:;">
                                <i></i>
                                <span>服务网点</span>
                            </a>
                        </li>

                        <li className='internet4'>
                            <a href="javascript:;">
                                <i></i>
                                <span>线下门店</span>
                            </a>
                        </li>

                    </ul>
                    <ul className='problemBox clearfix'>
                        <li className='problem'>
                            <a href="javascript:;">
                                <i></i>
                                <span>常见问题</span>
                            </a>
                        </li>
                        <li className='problem1'>
                            <a href="javascript:;">
                                <i></i>
                                <span>意见反馈</span>

                            </a>
                        </li>
                        <li className='problem2'>
                            <a href="javascript:;">
                                <i></i>
                                <span>线下门店</span>

                            </a>
                        </li>
                        <li className='problem3 '>
                            <a href="javascript:;">
                                <i></i>
                                <span>客服中心</span>
                            </a>
                        </li>
                        <div></div>
                    </ul>

                </div>
            </div>


            {/*我的消息*/}
            <div className='news'>
                <div className='newbox'>
                    <h3>我的消息</h3>
                </div>


                <div className='news-recommendBox'>
                    <div className='recommend1'>
                        <p className='reac'>为你推荐</p>
                        <p>06-25 18:52</p>
                    </div>
                    <a href="javascript:;">
                        <i></i>
                    </a>
                </div>


                <div className='news-series'>
                    <div className='recommend2'>
                        <p className='reac1'>为你推荐</p>
                        <p>06-25 18:52</p>
                    </div>

                    <div className='recommend3 clearfix'>
                        <a href="javascript:;">
                            <i></i>
                            <p className='title'>HUAWEI P20系列</p>
                            <p className='text'>掌上生活享12期免息，月供316元起，部分版本限量赠</p>


                        </a>
                    </div>

                    <div className='recommend2'>
                        <p className='reac1'>为你推荐</p>
                        <p>06-25 18:52</p>
                    </div>

                    <div className='recommend3 recommend4 clearfix'>
                        <a href="javascript:;">
                            <i></i>
                            <p className='title'>荣耀10</p>
                            <p className='text'>2400万AI摄影 新品放量购</p>


                        </a>
                    </div>


                </div>
            </div>


            {/*现在登录*/}
            <div className='now-log'>

                    {this.state.isLogin? <h4 >别拉了，人家有底线的呢
                    </h4>: <h3><span>登录即可查看全部动态消息 </span>
                        <Link to={'/person/login'}>现在登录></Link></h3>}


            </div>

            {/*尾部*/}

            <div className='footer'>
                <div className='sign-in'>
                    {this.state.isLogin?<a onClick={async (ev) => {
                        await exitLogin();
                        this.props.history.push('/person');
                    }}>退出</a>: <Link to={'/person/login'}>登录</Link>}

                    <a href="">反馈</a>


                </div>

                <div className='client'>
                    <a href="javascript:;">

                        <span><Icon className='icon' type='android' style={{fontSize: '.6rem'}}/>客户端</span>
                    </a>
                    <a href="javascript:;">

                        <span> <Icon className='icon' type='mobile' style={{fontSize: '.6rem'}}/>触摸板</span>
                    </a>

                    <a href="javascript:;">

                        <span><Icon className='icon' type='laptop' style={{fontSize: '.6rem'}}/>电脑版</span>
                    </a>
                </div>

                <div className='copy'>
                    <p className="copyright clearfix">
                        <a href="javascript:;">隐私政策</a>
                        <a>用户协议</a>
                        <a>苏ICP备17040376号-6</a>

                        <a href="">苏公网安备32011402010009号</a>
                        <span> Copyright © 2012-2018  VMALL.COM 版权所有</span>
                    </p>
                </div>
            </div>
        </div>
    }
}

export default connect(state => state.person, action.person)(Tip);



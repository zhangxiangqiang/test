import React from 'react';
import {connect} from 'react-redux'

/*IMPORT ANTD*/
import {Carousel} from 'antd';

/*IMPORT CSS*/
import '../../static/less/home.less'
import '../../static/common/common.less';

/*IMPORT ANTD*/
import {Icon,BackTop} from 'antd';
import NavTop from '../../component/NavTop'



/*IMPORT HASH*/
import {NavLink,Link} from 'react-router-dom';

/*action-index*/
import action from '../../store/action/index';
import {queryInfo} from '../../api/page';

 class Page extends React.Component {
    constructor (props,context){
        super(props,context);
        this.state={
            data:[]
        }
    }

     async componentDidMount() {
        let {bannerData,queryBanner,postdata,queryPoster,dataList} = this.props;
        if (bannerData) {
            queryBanner();  //dispatch派发的方法
        }
        if (postdata){
            queryPoster();
        }

         let result=await queryInfo({limit:100,page:1});

         let {code,data}=result;



         if(parseFloat(code)===0){
            this.setState({
                data
            })
        }
     }

    render(){

        let {bannerData,postdata,dataList} = this.props;
        //无文字图片
        let postdataLeft = postdata.slice(0,3),
            postdataRight = postdata.slice(3);

        //图文三条数据
        let threeData = this.state.data.slice(0,3);
        //超值精选
        let featured = this.state.data.slice(3,9);

        //手机
        let tel = this.state.data.slice(9,13),
            telList = this.state.data.slice(13,19);

        //笔记本
        let nodeBook = this.state.data.slice(19,23),
            nodeBookList = this.state.data.slice(23,29);

        //精品平板
        let pad = this.state.data.slice(29,33),
            padList = this.state.data.slice(33,39);

        //智能穿戴
        let wear = this.state.data.slice(43,47),
            wearList = this.state.data.slice(47,51);
       //智能家居
        let home = this.state.data.slice(51,55),
            homeList = this.state.data.slice(55,61);
        //热销配件
        let selling = this.state.data.slice(61,65),
            sellingList = this.state.data.slice(65,71);
        //生态产品
        let ecological = this.state.data.slice(71,75),
            ecologicalLiast = this.state.data.slice(75,81);


        return <section className='pageBox'>

            {/*轮播图*/}
            <div className='bannerList'>
               <Carousel autoplay>
                   {
                       bannerData.map((item,index) => {
                           let {src} = item;
                           return <div className='bannerList' key={index}><img src={src} alt=""/></div>
                       })
                   }
               </Carousel>
           </div>

            {/*小图标*/}
            <div className='couponBox'>
                <ul className='couponList clearfix'>
                    <li>
                        <a href="javascript:;">
                            <i className='icon1'></i>
                            <span>会员领券</span>
                        </a >
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className='icon2'></i>
                            <span>邀请有礼</span>
                        </a >
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className='icon3'></i>
                            <span>荣耀Play</span>
                        </a >
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className='icon4'></i>
                            <span>以旧换新</span>
                        </a >
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className='icon5'></i>
                            <span>优选配件</span>
                        </a >
                    </li>
                </ul>
            </div>

            {/*列表*/}
            <div className='productList clearfix'>
                {/*轮播图下 左部分*/}
                <ul className='clearfix'>
                    {
                        postdataLeft.map((item,index) => {
                            let {src,id} = item;
                            /**/
                            return  <Link to= {`/home/info?id=${id}`} key={index}>
                                <li key={index}><img src={src} alt=""/></li>
                            </Link>
                        })
                    }


                </ul>
                {/*轮播图下 右部分*/}
                <ul>
                    {postdataRight.map((item,index) => {
                        let {src,id} = item;
                        return <Link to = {`/home/info?id=${id}`} key={index}>
                            <li><img src={src} alt=""/></li>
                        </Link>
                    })}
                </ul>
            </div>
            <div className='content clearfix'>
                <ul className='clearfix'>
                    {
                        threeData.map((item,index) => {
                            let {src,title,desc,cur,id} = item;
                            return <Link to={`/home/info?id=${id}`} key={index}>
                                <li key={index}>
                                    <h6><img src={src} alt=""/></h6>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                    <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                </li>
                            </Link>
                        })
                    }
            </ul>
            </div>

            {/*超值精选，结构复制上边的列表，样式复用上边的列表*/}
            <div className='featured'>
                <div className='h'>
                    <h2>超值精选</h2>
                </div>
                <div className='featuredList content clearfix'>
                    <ul className='clearfix'>

                        {
                            featured.map((item,index) => {
                                let {src,title,desc,cur,id} = item;
                                return <Link to={`/home/info?id=${id}`} key={index}>
                                    <li>
                                        <h6><img src={src} alt=""/></h6>
                                        <h5>{title}</h5>
                                        <p>{desc}</p>
                                        <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                    </li>
                                </Link>
                            })
                        }


                    </ul>
                </div>
            </div>

            {/*公告*/}
            <div className='announcement'>
                <div className='clearfix'>
                    <h6>公告</h6>
                    <span>荣耀”紫”为你来</span>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='clearfix'>
                    <h2><img src="https://res.vmallres.com/pimages//sale/2018-06/20180614160108466.jpg" alt=""/></h2>
                    <h2><img src="https://res.vmallres.com/pimages//sale/2018-06/20180608103803874.jpg" alt=""/></h2>
                </div>
            </div>

            {/*手机*/}
            <div className='phone'>
                <div className='header'>
                    <h6>手机</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                tel.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    telList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*笔记本*/}
            <div className='phone'>
                <div className='header'>
                    <h6>笔记本</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                nodeBook.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;

                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' :'¥'+ cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    nodeBookList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*精品平板*/}
            <div className='phone'>
                <div className='header'>
                    <h6>精品平板</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                pad.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    padList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*智能穿戴*/}
            <div className='phone'>
                <div className='header'>
                    <h6>智能穿戴</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>

                            {
                                wear.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    wearList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*智能家居*/}
            <div className='phone'>
                <div className='header'>
                    <h6>智能家居</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                home.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    homeList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*热销配件*/}
            <div className='phone'>
                <div className='header'>
                    <h6>热销配件</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                selling.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    sellingList.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*生态产品*/}
            <div className='phone'>
                <div className='header'>
                    <h6>生态产品</h6>
                    <span>更多<i>&gt;</i></span>
                </div>
                <div className='body' id='body'>
                    <div className='phoneList content clearfix'>
                        <ul className='clearfix'>
                            {
                                ecological.map((item,index) => {
                                    let {src,title,desc,cur,id} = item;
                                    return <Link to={`/home/info?id=${id}`} key={index}>
                                        <li>
                                            <h6><img src={src} alt=""/></h6>
                                            <h5>{title}</h5>
                                            <p>{desc}</p>
                                            <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                        </li>
                                    </Link>
                                })
                            }


                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className=' featured'>
                        <div className='featuredList content clearfix'>
                            <ul className='clearfix'>
                                {
                                    ecologicalLiast.map((item,index) => {
                                        let {src,title,desc,cur,id} = item;
                                        return <Link to={`/home/info?id=${id}`} key={index}>
                                            <li>
                                                <h6><img src={src} alt=""/></h6>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <p>{isNaN(parseFloat(cur)) ? '暂无商品' : '¥'+cur}</p>
                                            </li>
                                        </Link>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            {/*登录注册 及 下载*/}
            <div className='footer'>
                <div className='sign-in'>
                    <Link to='/person/login'>登录</Link>
                    <a href="javascript:;">反馈</a>

                </div>

                <div className='client'>
                    <a href="javascript:;">

                        <span><Icon className='icon' type='android' style={{ fontSize:'.6rem'}}/>客户端</span>
                    </a>
                    <a href="javascript:;">

                        <span> <Icon className='icon' type='mobile' style={{ fontSize:'.6rem'}}/>触摸板</span>
                    </a>

                    <a href="javascript:;">

                        <span><Icon className='icon' type='laptop' style={{ fontSize:'.6rem'}}/>电脑版</span>
                    </a>
                </div>

                <div className='copy'>
                    <p className="copyright clearfix">
                        <a  href="javascript:;">隐私政策</a>
                        <a href="javascript:;">用户协议</a >
                        <a href="javascript:;">苏ICP备17040376号-6</a>

                        <a href="javascript:;">苏公网安备32011402010009号</a>
                        <span> Copyright © 2012-2018  VMALL.COM 版权所有</span>
                    </p>
                </div>
            </div>


            {/*底部*/}
            <NavTop/>


            {/*回到顶部*/}
            <div className='backTop'>
                <BackTop/>
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
            </div>
            </section>
    }
}


export default connect(state => ({...state.page}),action.page)(Page);
import React from "react";
import {connect} from "react-redux";
import {Icon, Button} from 'antd'
import {Link} from 'react-router-dom'
import '../../static/less/discover/channel.less';
import {withRouter} from 'react-router-dom';
import action from '../../store/action/index';


class Channel extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

  componentDidMount(){
    this.props.queryDiscover();
}


render() {
        let {discoverData} = this.props;

        //{data} = discoverData;
        return <div className='discovery'>

            <div className='header'>
                <h1>发现频道</h1>
            </div>
            {/*content*/}
            <div className='content'>
                <div className='FindTab'>
                    <ul>
                        <li className='advert clearfix'>
                            <a href="javascript:;">
                                <i></i>
                                <span>商城头条</span>
                            </a>
                        </li>
                        <li className=' advert1'>
                            <a href="javascript:;">
                                <i></i>
                                <span>企业购</span>
                            </a>
                        </li>
                        <li className='advert2'>
                            <a href="javascript:;">
                                <i></i>
                                <span>领优惠券</span>
                            </a>
                        </li>
                        <li className='advert3'>
                            <a href="javascript:;">
                                <i></i>
                                <span>荣耀Play</span>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className='picture'>
                    <h3>
                        <img src="https://res.vmallres.com/nwap/20180630/images/echannelWap/misc/title_headline.png"
                             alt=""/>
                        <span>-声明-</span>
                    </h3>
                </div>


                {/*分类信息*/}
                <div className='imgBox'>
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="https://res.vmallres.com/pimages///cop/20170426143727329/1493188647329.jpg"
                                     alt=""/>
                            </a>
                        </li>
                        <li><a href="javascript:;">
                            <img src="https://res.vmallres.com/pimages///cop/20170512164914318/1494578954318.jpg"
                                 alt=""/>
                        </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="https://res.vmallres.com/pimages///cop/20170426143742617/1493188662617.jpg"
                                     alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>

                {/*大图*/}
                <div className='big-picture'>
                    <a href="javascript:;">
                        <i></i>
                        <p className='p-name'>【今日快报】荣耀9i 碧玉青10:08清新来袭！</p>
                        <p className='p-text'>”青青“子衿，悠悠我心，但为君故，即将开售！</p>
                    </a>


                </div>


                {/*图文*/}
                <div className='image-text'>
                    <div className='courseList'>
                        <h3 className='clearfix'>
                            <span>2018/07/05</span>
                            <span className='time-date'>
                            <Icon className='icon' type='eye-o' style={{fontSize: '.3rem'}}/>
                            1849
                        </span>
                        </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <div className='content'>

                                        <div className='pic'>
                                            <img
                                                src="https://res.vmallres.com/pimages///cop/20180705091344165/1530753224165.jpg"
                                                alt=""/>
                                            {/**/}
                                        </div>
                                        <div className='desc'>
                                            <p>重磅消息！荣耀10 GT版即将迎来四项重大升级！</p>
                                            <p className='rightTime'>2018/07/05</p>
                                            <p className='righteye'><Icon className='icon' type='eye-o'
                                                                          style={{fontSize: '.3rem'}}/> 890</p>


                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <div className='content'>

                                        <div className='pic'>
                                            <img
                                                src="https://res.vmallres.com/pimages///cop/20180706103906329/1530844746329.jpg"
                                                alt=""/>
                                            {/**/}
                                        </div>
                                        <div className='desc'>
                                            <p>教你几招“很吓人的”拍照小技巧 </p>
                                            <p className='rightTime'>2018/07/05</p>
                                            <p className='righteye'><Icon className='icon' type='eye-o'
                                                                          style={{fontSize: '.3rem'}}/> 890</p>


                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <div className='content'>

                                        <div className='pic'>
                                            <img
                                                src="https://res.vmallres.com/pimages///cop/20180705092728223/1530754048223.jpg"
                                                alt=""/>
                                            {/**/}
                                        </div>
                                        <div className='desc'>
                                            <p>【今日快报】荣耀9i 碧玉青10:08清新来袭！</p>
                                            <p className='rightTime'>2018/07/05</p>
                                            <p className='righteye'><Icon className='icon' type='eye-o'
                                                                          style={{fontSize: '.3rem'}}/> 890</p>


                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <div className='content'>

                                        <div className='pic'>
                                            <img
                                                src="https://res.vmallres.com/pimages///cop/20180703094322451/1530582202451.jpg"
                                                alt=""/>
                                            {/**/}
                                        </div>
                                        <div className='desc'>
                                            <p>深入地下岩洞，用华为P20 Pro发现浩瀚星空 </p>
                                            <p className='rightTime'>2018/07/05</p>
                                            <p className='righteye'><Icon className='icon' type='eye-o'
                                                                          style={{fontSize: '.3rem'}}/> 890</p>


                                        </div>
                                    </div>

                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className='See'>
                    <a href="javascript:;"><h3>点击查看更多></h3></a>

                </div>

            </div>


            {/*口碑好货*/}
            <div className='findList'>
                <div className='imgTitle'>
                    <img src="https://res.vmallres.com/nwap/20180630/images/echannelWap/misc/title_publicPraise.png"
                         alt=""/>
                </div>


                {/*图文列表*/}
                {discoverData && discoverData.length !== 0 ? (<div className='Graphic-and-text'>
                    {discoverData.map((item,index)=>{
                        let {src,title,content,num}=item;

                        {/*大图*/}
                        return <div className='show' key={index}>
                            <div className='reputation-img'>
                                <a href="javascript:;">
                                    <img src={src} alt=""/>
                                </a>
                            </div>


                            {/*点赞的*/}
                            <div className='good'>
                              <p>
                                  <Icon className='iacon-good' type="like" style={{fontSize: '.6rem'}}/>
                              </p>
                                <p>{num}人点赞</p>
                            </div>

                            {/*标题/评论*/}
                            <div className='reputation-text'>

                                <a href="javascript:;">
                                    <h1>{title}</h1>
                                    <div className='comment'>
                                        <p>来自
                                            <span className='red'>18239*****推荐：</span>
                                            {content}
                                        </p>
                                    </div>
                                </a>


                            </div>
                            {/*底部时间*/}
                            <div className='Time-date'>
                                <a href="javascript:;">
                                    <p><span>2018/07/06</span>
                                        <span className='right'>了解详情 ></span></p>

                                </a>
                            </div>

                        </div>

                    })}





                </div>) : '暂无数据'}


            </div>

        </div>


    }
}


//export default withRouter(connect()(Channel));
export default connect(state => ({...state.discover}), action.discover)(Channel);
import React from 'react';
import {Carousel} from 'antd';

import '../../static/less/category/recommended.less'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import action from '../../store/action/index';


class Recommended extends React.Component {




    constructor(props, context) {
        super(props, context);
    }

    async componentDidMount() {
        let {cateQueryInfo, productData} = this.props;


        if (!productData || productData.length === 0) {
            cateQueryInfo();
        }

    }

    render() {
        let {productData}=this.props;
       /* console.log(this.props);
        console.log(productData);*/
        return <section className={'recommeneded'}>
            <div className='ban'>
                <ul>
                    <li><a href="javascript:;"><img
                        src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1529585284712.png"
                        alt=""/></a></li>
                    <li><a href="javascript:;"><img
                        src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1529498373292.png"
                        alt=""/></a></li>
                    <li><a href="javascript:;"><img
                        src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1527668727340.jpg"
                        alt=""/></a></li>
                </ul>
            </div>
            <Carousel>

                <div className={'a'}>

                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726202455.jpg"
                             alt=""/></a>
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726262819.jpg"
                             alt=""/></a>
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726291458.jpg"
                             alt=""/></a>
                </div>


                <div className={'b'}>
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726312709.jpg"
                             alt=""/></a>
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726202455.jpg"
                             alt=""/></a>
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/pimages//common/mobile/frontCategory/1500726202455.jpg"
                             alt=""/></a>
                </div>

            </Carousel>
             <h3>-- 热销推荐--</h3>
            <div className={'hot-sale clearfix'}>
                <ul>
                    {productData && productData.length !== 0 ? (productData.map((item, index) => {
                        let {src, title} = item;
                        title = title.substr(0, 6);
                        return <li className={'item'} key={index}>
                            <Link to='/home/info'>
                                <div className={'desc'}>

                                    <img src={src} alt=""/>

                                    <p className='name'>{title}</p>
                                </div>
                            </Link>
                        </li>
                    })) : ''}
                </ul>
            </div>
            <h3> -- 超值精选 --</h3>
            <div className={'hot-sale clearfix'}>
                <ul>
                    {productData.slice(7).map((item,index)=>{
                        let {src,title}=item;
                        title = title.substr(0,6);
                        return  <li className={'item'} key={index}>
                            <Link to='/home/info'>
                                <div className={'desc'}>

                                    <img src={src} alt=""/>

                                    <p className='name'>{title}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                    </ul>
            </div>
            <h3> -- 移动4G+专区 --</h3>
            <div className={'hot-sale clearfix'}>
                <ul>
                    {productData.slice(3,9).map((item,index)=>{
                        let {src,title}=item;
                        title = title.substr(0,6);
                        return  <li className={'item'} key={index}>
                            <Link to='/home/info'>
                                <div className={'desc'}>

                                    <img src={src} alt=""/>

                                    <p className='name'>{title}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                    </ul>
            </div>
        </section>

    }
}
export default connect(state => ({...state.category}), action.category)(Recommended);
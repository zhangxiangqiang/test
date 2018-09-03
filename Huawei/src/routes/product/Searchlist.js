import React from 'react';
import {connect} from 'react-redux'
import {Link,HashRouter,Route} from 'react-router-dom';

/*IMPORT ANTD*/
import {Icon,Modal, Button,Alert} from 'antd';

/*IMPORT CSS*/
import '../../static/less/home.less';

import action from '../../store/action/index';
import { queryInfo } from '../../api/page'




 class Searchlist extends React.Component {
    constructor (props,context){
        super(props,context);
        this.state={
            flag: 'asc',
            searchData: [],
            productList: []
        };
    }

    async componentDidMount(){
        let {searchData} = this.props;
        this.setState({
            searchData
        });

        let productList = await queryInfo({
            limit: 15
        });

        if(productList.code === 0){

            this.setState({
                productList: productList.data.slice(6)
            });
        }





    };

    render(){

//没有列表的提示
        /*if (this.state.searchData.length === 0) {
            return <Alert message="没有搜索到相关数据,换个词试试" type="info"/>


        }*/



        return <div className='searchList searchBox'>
            {/*样式／结构复用 search组件 */}
            <div className='searchTop'>
                <div className='searchInput clearfix'>
                    <h6 className='arrowLeft'><Icon type='arrow-left' onClick={this.handleClick}></Icon></h6>
                    <div className='inputBox'>
                        <Icon type='search' className='icon'></Icon>
                        <Link to='/home/search'><input type="text" placeholder={'HUAWEI P20 '}/></Link>
                    </div>
                    <a href="javascript:;"><span>搜索</span></a>
                </div>
            </div>



            {/*三元运算符判断，没有数据给出提示*/}
            {this.state.searchData.length === 0 ? <div className='hot'>
                <Alert message="没有搜索到相关数据,换个词试试" type="info"/>

                <p>为您推荐</p>
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
            </div> : <div className={'ProSort'}>
                    <div className='tabBar'>
                        <ul className='clearfix'>
                            <li onClick={this.handlePrice}><a href="javascript:;" className='clearfix'>综合</a></li>
                            <li onClick={this.handlePrice}><a href="javascript:;" className='clearfix'>最新</a></li>
                            <li onClick={this.handlePrice}><a href="javascript:;" className='clearfix'>热度</a></li>
                            <li className='noBorder' onClick={this.handlePrice}><a href="javascript:;" className='clearfix'>价格</a></li>

                        </ul>
                    </div>
                    <div className='proList clearfix'>

                        {this.state.searchData.map((item,index) => {
                            let {src,title,cur} = item;
                            return <div key={index}>
                                <Link to='/home/info'>
                                    <div className='pic'><img src={src} alt=""/></div>
                                    <div className='desc'>
                                        <p className="title"><span>{title}</span></p>
                                        <p className='price'>¥{cur}</p>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>}

            {/*排序*/}

        </div>
    };

    //返回上一级
    handleClick = () => {
        this.props.history.goBack(1);
    };

    //价格排序
    handlePrice =() => {
        if(this.state.flag === 'asc') {
            let {searchData} = this.state;
            let ary = searchData.sort((a,b) => {
                return parseFloat(a.cur) - parseFloat(b.cur);

            });
            this.setState({
                flag: 'desc',
                searchData: ary
            });
            return;
        }

        let {searchData} = this.state;
        let ary = searchData.sort((a,b) => {
            return parseFloat(b.cur) - parseFloat(a.cur);

        });
        this.setState({
            flag: 'asc',
            searchData: ary
        });



    };





}

export default connect (state => ({...state.page}),action.page)(Searchlist);
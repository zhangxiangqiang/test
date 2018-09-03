import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/*IMPORT ACTION*/
import action from '../../store/action/index'



/*IMPORT ANTD*/
import {Icon,Modal, Button} from 'antd';


/*IMPORT css*/
import '../../static/less/home.less';

 class Search extends React.Component {
    constructor (props,context){
        super(props,context);
        this.state = {
            visible: false,
            is:false
        };

    }



    render(){
       this.searchHistory=JSON.parse(localStorage.getItem('a'))||[]

        return <div className='searchBox'>
            {/*搜索框*/}
            <div className='searchTop'>
                    <div className='searchInput clearfix'>
                        <h6 className='arrowLeft'><Icon type='arrow-left' onClick={this.handleClick}></Icon></h6>

                        <div className='inputBox'>
                            <Icon type='search' className='icon'></Icon>
                            <input type="text" placeholder={'HUAWEI P20 '} ref='search' onKeyUp={this.pressKey}/>
                        </div>
                        <span onClick={
                            this.handleSearch
                        }>搜索</span>
                    </div>

            {/*热门搜索*/}
            <div className='searchHot'>
                <h5>热门搜索</h5>
                <div className='searchContenet'>
                    <ul className='clearfix' onClick={this.handleGoTop}>
                        <li>HUAWEI</li>
                        <li>荣耀Play</li>
                        <li>华为畅享8</li>
                        <li>荣耀9i</li>
                        <li>华为平板 M5 8.4英寸</li>
                    </ul>
                </div>

            </div>
            </div>
            {/*搜索历史*/}
            <div className='searchHistory'>
                <div className='searchButton clearfix'>
                    <h6>搜索历史</h6>
                    <span onClick={this.del} className={this.state.is?'':''}>清空</span>
                </div>
                <div  className='searchList'>
                    <ul>
                        {this.searchHistory.map((item,index)=>{
                            return <li key={index}>
                                    {item}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            </div>
    };

    //点击返回到首页
    handleClick = () => {
        this.props.history.goBack(1);
    }

    //点击搜索 执行的方法
     handleSearch = async () => {
         let {querySearch} = this.props; //结构高阶过来的组件

         let value = this.refs.search.value;  // => 获取输入框的内容
         this.searchHistory.unshift(value)
         localStorage.setItem('a',JSON.stringify(this.searchHistory));
          // 执行派发方法，把value（输入框的内容）传递
         let result = await querySearch(value); //这个result的 值 是undefined，怎么挂到redux上的===================重点注意

         //判断 如果输入框没有输入内容，弹出提示，不再进入下个页面
        if (value.length === 0) {
            this.success()
            return;
        }
        this.props.history.push('/home/searchlist');
     };

    del=ev=>{
        localStorage.clear('a');
        this.setState({
            is:true
        })
    }

    //点击回车后 执行的方法
     pressKey = ev => {
         if (ev.keyCode === 13) {
             this.handleSearch();
         }
     };

     //模态对话框（判断：不输入内容）
     success() {
         const modal = Modal.success({
             title: '请输入需要搜索的内容！'
         });
         setTimeout(() => modal.destroy(), 2000);
     }

     //
     handleGoTop = (ev) => {

         let target = ev.target,
             value = target.innerHTML;
         this.refs.search.value = value;
         this.handleSearch();

     };
}

export default connect (state => ({...state.page}),action.page)(Search);
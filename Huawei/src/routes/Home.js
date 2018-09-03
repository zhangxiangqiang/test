import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

/*IMPORT COMPONENT*/
import NavTop from '../component/NavTop';
import Page from './product/Page';
import List from './product/List';
import Info from './product/Info';



import Search from './product/Search';
import Searchlist from './product/Searchlist'




export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {


        return <div className='pageList'>
            {this.props.location.pathname.includes('/home/info')?"":<NavTop/>}
            <Switch>
                <Route path='/home' exact component={Page}/>
                <Route path='/home/list' component={List}/>
                <Route path='/home/info' component={Info}/>


                {/*搜索栏目,这里先不引用*/}
                <Route path='/home/search' component={Search}/>
                <Route path='/home/searchlist' component={Searchlist}/>
            </Switch>
        </div>;
    }
}
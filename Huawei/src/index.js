/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';

import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT css*/

import './static/common/common.less'
import './static/css/reset.min.css'

// component
import Person from './routes/Person'
import Home from "./routes/Home"
import Discover from './routes/Discover'
import Category from './routes/Category'
import Cart from './routes/Cart'
import Recommended from "./routes/category/Recommended";
import NavTop from './component/NavTop'
import NavBottom from './component/NavBottom'


import Page from "./routes/product/Page"

render(
    <Provider store={store}>
    <HashRouter>
        <Switch>
            <LocaleProvider locale={zh_CN}>
                <div>
                    <NavTop/>
                    <Route path={'/'} exact component={Page}/>
                    <Route path={'/home'}  component={Home}/>
                    <Route path={'/category'} component={Category}/>

                    <Route path={'/discover'} component={Discover}/>
                    <Route path={'/cart'} component={Cart}/>
                    <Route path={'/person'} component={Person}/>
                    <NavBottom/>
                </div>
            </LocaleProvider>
        </Switch>
    </HashRouter>
    </Provider>
    , root);
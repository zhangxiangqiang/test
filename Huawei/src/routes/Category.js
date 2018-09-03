import React from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';


/*样式导入*/
import '../static/less/category/index.less'

/*import '../static/img/wode/category/index.less'*/


/*组件导入*/
import Recommended from './category/Recommended';
import Huawei from './category/Huawei';
import Rongyao from './category/Rongyao';
import Computer from './category/Computer';
import Smartwear from './category/Smartwear';
import Smarthome from './category/Smarthome';
import Exclusive from "./category/Exclusive";
import General from './category/General';
import Ecological from './category/Ecological';
import Valueadded from './category/Valueadded';
import NavTop from "../component/NavTop";


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <article className='category clearfix'>
            <NavTop/>

           <section className={'contain'}>
               <div className={'category-left'} style={{float:'left'}}>
                   <ul>

                       <li>
                           <NavLink to='/category/recommended'><span>为您推荐</span></NavLink></li>

                       <li><NavLink to='/category/huawei'><span>华为手机</span></NavLink></li>
                       <li>
                           <NavLink to='/category/rongyao'><span>荣耀手机</span>
                           </NavLink></li>
                       <li><NavLink to='/category/computer'>
                           <span>笔记本&平板</span></NavLink>
                       </li>



                      {/* <li><NavLink to='/category/smartwear'>
                           <span>智能穿戴</span></NavLink>
                       </li>
                       <li><NavLink to='/category/smarthome'><span>智能家居</span></NavLink>
                       </li>
                       <li><NavLink to='/category/exclusive'>
                           <span>专属配件</span></NavLink>
                       </li>
                       <li><NavLink to='/category/general'>
                           <span>通用配件</span></NavLink>
                       </li>
                       <li><NavLink to='/category/ecological'>
                           <span>生态产品</span></NavLink>
                       </li>
                       <li><NavLink to='/category/valueadded'>
                           <span>增值服务</span></NavLink>
                       </li>*/}
                   </ul>
               </div>
               <div className={'category-right'}>
                   <Switch>
                       <Redirect from='/category' exact to={'/category/recommended'}/>
                       <Route path={'/category/recommended'}  component={Recommended}/>
                       <Route path={'/category/huawei'} component={Huawei}/>
                       <Route path={'/category/rongyao'} component={Rongyao}/>
                       <Route path={'/category/computer'} component={Computer}/>
                       <Route path={'/category/smartwear'} component={Recommended}/>
                       <Route path={'/category/smarthome'} component={Recommended}/>
                       <Route path={'/category/exclusive'} component={Recommended}/>
                       <Route path={'/category/general'} component={Recommended}/>
                       <Route path={'/category/ecological'} component={Recommended}/>
                       <Route path={'/category/valueadded'} component={Recommended}/>

                   </Switch>
               </div>
           </section>
        </article>
    }
}

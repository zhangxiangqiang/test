import React from 'react';
import {Route, HashRouter,Redirect, Switch} from 'react-router-dom'

import Tip from './person/Tip';
import Login from './person/Login'
import Register from './person/Register'



class  Person extends React.Component{

    constructor(props,context){
        super(props,context);
    }


    render(){

        return  <div>
            <HashRouter>
                <Switch>
                    <div>
                        <Route path={'/person'} exact component={Tip}/>
                        <Route path={'/person/login'} component={Login}/>
                        <Route path={'/person/register'} component={Register}/>
                    </div>
                </Switch>
            </HashRouter>
        </div>
    }
}
export  default Person;
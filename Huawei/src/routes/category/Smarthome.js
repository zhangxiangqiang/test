import React from 'react';
import {connect} from "react-redux";
class Smarthome extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='smartHomeBox'>
            <h3>-- 精选智能家居--</h3>
            <div className='smartHomeList'>
                <ul>
                    <li>
                        <img src="https://res.vmallres.com/pimages//product/6901443219940/428_428_1521184530843mp.jpg" alt=""/>
                        <p>华为子线跌幅</p>
                    </li>
                    <li>
                        <img src="https://res.vmallres.com/pimages//product/6901443219940/428_428_1521184530843mp.jpg" alt=""/>
                        <p>华为子线跌幅</p>
                    </li>
                    <li>
                        <img src="https://res.vmallres.com/pimages//product/6901443219940/428_428_1521184530843mp.jpg" alt=""/>
                        <p>华为子线跌幅</p>
                    </li>
                    <li>
                        <img src="https://res.vmallres.com/pimages//product/6901443219940/428_428_1521184530843mp.jpg" alt=""/>
                        <p>华为子线跌幅</p>
                    </li>

                </ul>
            </div>
        </div>
    }
}
export default Smarthome;
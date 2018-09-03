import React from 'react';
import {connect} from "react-redux";
class Smartwear extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='cateSmartwearBox'>
            <h3>-- 精选智能穿戴--</h3>
            <div className='smartWearList'>
                <ul>
                    <li>
                        <a href="">
                            <img src="https://res.vmallres.com/pimages//product/6901443204212/428_428_1507769117117mp.jpg" alt=""/>
                            <p>华为手机特价活动不能省</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://res.vmallres.com/pimages//product/6901443204212/428_428_1507769117117mp.jpg" alt=""/>
                            <p>华为手机特价活动不能省</p>
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    }
}
export default Smartwear;
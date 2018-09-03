import React from 'react';
import {connect} from "react-redux";
class Valueadded extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='valueaddedBox'>

            <h3>-- 礼品包装精选商品--</h3>
            <div className='valueaddedList'>
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
export default Valueadded;
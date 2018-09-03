import React from 'react';
import {connect} from "react-redux";
class Ecological extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='ecologicalBox'>

            <h3>-- 精选智能产品--</h3>
            <div className='ecologicalList'>
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
export default Ecological;
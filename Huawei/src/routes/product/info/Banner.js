import React from 'react';
import { Carousel } from 'antd';
import {NavLink} from 'react-router-dom'

// css
import "../../../static/less/homeInfo/home_info_banner.less"

//api
import { queryInfoBanner } from "../../../api/product"

export default class Banner extends React.Component{
    constructor(props){
        super(props);
       this.state = {
           dataAry: []
        }
    }


    async componentDidMount(){
        let data = await queryInfoBanner(24);
        if(parseFloat(data.code)===0){
            this.data = data.data;
            let dataAry = [this.data.src,this.data.png1,this.data.png2];
            this.setState({
                dataAry
            })
        }
    }

    render(){
        return <div className={'homeInfoBanner'}>
            <Carousel autoplay>
                {this.state.dataAry.map((item, index)=>{
                    return <div key={index}>
                        <div className={'banImg'}>
                            <img src={`${item}`} alt=""/>
                        </div>
                    </div>
                })}
            </Carousel>
        </div>
    }
}

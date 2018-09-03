import React from 'react'
import {connect} from 'react-redux'
import Channel from './discover/Channel';


class Discover extends React.Component{
    constructor(props,context){
        super(props, context);
    }

    render(){
        return <section>
            <Channel/>
        </section>;
    }
}

export default Discover;
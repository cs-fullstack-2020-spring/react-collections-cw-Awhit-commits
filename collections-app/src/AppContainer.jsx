import React, { Component, Fragment } from 'react'

import UserInformation from './UserInformation.jsx'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        
        const rawdata = require('./rawData.js')
        return (
            //Using Fragment tag in place of div tag
            <Fragment>
                <h1>User Information</h1>
                {/* Using map fucntion to iterate through json file */}
                {
                    rawdata.map((post,index)=>{

                        return <UserInformation key ={index} userData = {post}/>

                    })
                }

            </Fragment>
        )
    }
}

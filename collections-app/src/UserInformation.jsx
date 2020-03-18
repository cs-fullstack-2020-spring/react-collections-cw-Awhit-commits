import React, { Component } from 'react'

export default class UserInformation extends Component {
    render() {
        return (
            // listing what properties that were needed out of the rawData js file 
            <div className= "userInfo">
                <p>Id: {this.props.userData.id}</p>
                <p>Name: {this.props.userData.name}</p>
                <p>Username: {this.props.userData.username}</p>
                <p>Email: {this.props.userData.email}</p>
                <p>Street: {this.props.userData.address.street}</p>
                <p>Suite: {this.props.userData.address.suite}</p>
                <p>City: {this.props.userData.address.city}</p>
                <p>ZipCode: {this.props.userData.address.zipcode}</p>
                <p>geo lat: {this.props.userData.address.geo.lat} geo long: {this.props.userData.address.geo.lng}</p>
                

            </div>
        )
    }
}

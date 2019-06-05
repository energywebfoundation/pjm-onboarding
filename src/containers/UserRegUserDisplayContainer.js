import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserRegUserDisplayComponent from '../components/UserRegUserDisplayComponent'


class UserRegUserDisplayContainer extends Component {
    

    render() {
        return (
            <UserRegUserDisplayComponent >
            </UserRegUserDisplayComponent>
        )
    }
}

export default connect()(UserRegUserDisplayContainer);



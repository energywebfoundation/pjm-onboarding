import React, { Component } from 'react';
import AdminRegUserDisplayComponent from '../components/AdminRegUserDisplayComponent'
import RegUserDetailsDisplayComponent from '../components/RegUserDetailsDisplayComponent'

class AdminRegUserDisplayContainer extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            userindex: 0,
            showModal: false,    
        };
    }

    handleDisplayDetails = (e) => {
         const { name, value } = e.target;
         let newState = Object.assign({}, this.state);
         newState.userindex = parseInt(name);
         newState.showModal = true;
         this.setState(newState);
    }

    handleApproveReject= (e) => {
        e.preventDefault();
        localStorage.setItem('accHolder', '');
        let newState = Object.assign({}, this.state);
        newState.showModal = false;
        this.setState(newState);
    }

    render() {
        var users = localStorage.getItem('users') == null ? new Array() : JSON.parse(localStorage.getItem('users'));
        let usrobj = users[this.state.userindex];
            return (
            <div>
                <div className="container">
                    <AdminRegUserDisplayComponent
                        UsersP={users}
                        DetailsF={this.handleDisplayDetails}
                        showModal={this.state.showModal}

                    />

                    <RegUserDetailsDisplayComponent 
                        UserP={usrobj}
                        showModal={this.state.showModal}
                        HandleEventF={this.handleApproveReject} />

                </div>
            </div>
        )
    }
}

export default AdminRegUserDisplayContainer;
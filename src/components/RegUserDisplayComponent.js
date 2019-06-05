//TODO Adding default message if there is no user request
import React, { Component } from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';
import '../resources/css/modal.css'
import { Link } from 'react-router-dom';
import { throws } from 'assert';

class RegUserDisplayComponent extends Component {

    render() {
        return (
            <div className="container" style={{ marginTop: 30 }}>
                <div className="card">
                    <div className="card-header">Account Requests</div>
                    <div className="card-body">
                        <div className="form-group row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th >Requestor</th>
                                        <th >Email</th>
                                        <th >Parent Company Name</th>
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.UsersP != null ?
                                        this.props.UsersP.map(function (item, i) {

                                            return (<tr>
                                                <td>{item.firstName + " " + item.lastName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.parentCompanyName}</td>
                                                <td><button className="btn btn-primary" name={i} onClick={this.props.DetailsF}> View Details</button></td>
                                                <td><button className="btn btn-primary" name={i} onClick={this.props.EditF}> Edit Details</button></td>
                                            </tr>)
                                        }, this) : ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegUserDisplayComponent;
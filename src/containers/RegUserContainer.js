import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Actions'
import RegUserComponent from '../components/RegUserComponent'
import validationLib from '../helper-lib/ValidationLib'

class RegUserContainer extends Component {

    handleChange = (e) => {
        const { name, value } = e.target;
        let newState = Object.assign({}, this.props);

        newState.user[name] = e.target.type === 'checkbox' ? e.target.checked : value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let inValid = false;
        Object.keys(this.props.user).map((v) => {
            if (this.props.fieldValidationErrors[v])
                inValid = (this.isValid(v, this.props.user[v])) || inValid;
        });

        if (!inValid) {
            let newObj = Object.assign({}, this.props.user);
            var users = null;
            if (localStorage.getItem('users') == null) {
                users = new Array(newObj);
            }
            else {
                users = JSON.parse(localStorage.getItem('users'));
                users.push(newObj);

            }
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('newUser', '123');
            this.props.addUser(this.props.user);
            window.location.reload();
        }
    }

    isValid = (name, value) => {
        let inValid = false;
        let newState = Object.assign({}, this.props);
        newState.fieldValidationErrors[name].ErrorMsg = "";

        if (newState.fieldValidationErrors[name])
            Object.keys(newState.fieldValidationErrors[name]).map(function (v) {
                newState.fieldValidationErrors[name].ErrorMsg += (validationLib[v] ? validationLib[v](value, name) : '');
                inValid = (newState.fieldValidationErrors[name].ErrorMsg !== '') || inValid;
            });

        this.setState(newState);
        return inValid;
    }

    handleValidation = (e) => {
        const { name, value } = e.target;
        this.isValid(name, value);
    }

    render() {
        return (
            <RegUserComponent
                handleChangeF={this.handleChange}
                handleSubmitF={this.handleSubmit}
                UserP={this.props.user}
                ValidationF={this.handleValidation}
                ValidationP={this.props.fieldValidationErrors}
            >
            </RegUserComponent>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        fieldValidationErrors: state.fieldValidationErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (newState) => dispatch({type: 'ACTION', user: newState})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegUserContainer);
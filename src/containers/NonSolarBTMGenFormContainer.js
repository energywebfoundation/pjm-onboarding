import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Actions'
import NonSolarBTMGenFormComponent from '../components/NonSolarBTMGenFormComponent'
import validationLib from '../helper-lib/ValidationLib'

class NonSolarBTMGenFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                address: '',
                plant_name: '',
                unit_name: '',
                name_plate_capacity: '',
                street1: '',
                street2: '',
                city: '',

                country: '',
                zipOrPostalCode: '',
                ownerInfo: '',
                online_date: '',
                utility_name: '',
                balancing_authority: '',
                region_name: '',
                derate_date: '',
                capAddition: '',
                relicenseDate: '',
                cemReporting: '',
                orisPL: '',
                emissionUnitID: '',
                peerUnitName: '',
            }, 
            fieldValidationErrors: {
                email: { ErrorMsg: '', validEmail: true, required: true },
                address: { ErrorMsg: '', required: true },
                plant_name: { ErrorMsg: '', required: true, onlyAlpha: true },
                unit_name: { ErrorMsg: '', required: true, onlyAlpha: true },
                name_plate_capacity: { ErrorMsg: '', required: true, number: true },
                street1: { ErrorMsg: '', required: true, alphaNumeric: true },
                street2: { ErrorMsg: '', required: true, alphaNumeric: true },
                city: { ErrorMsg: '', required: true, onlyAlpha: true },
    
                country: { ErrorMsg: '', required: true, onlyAlpha: true },
                zipOrPostalCode: { ErrorMsg: '', required: true, Zip_code: true },
                ownerInfo: { ErrorMsg: '', required: true },
                online_date: { ErrorMsg: '', required: true, month_date_check: true },
                utility_name: { ErrorMsg: '', required: true, alphaNumeric: true },
                balancing_authority: { ErrorMsg: '', required: true, alphaNumeric: true },
                region_name: { ErrorMsg: '', required: true, onlyAlpha: true },
                derate_date: { ErrorMsg: '', required: true, month_date_check: true },
                capAddition: { ErrorMsg: '', required: true, number: true },
                relicenseDate: { ErrorMsg: '', required: true, month_date_check: true },
                cemReporting: '',
                orisPL: { ErrorMsg: '', required: true, number: true, tooManyLetters: true },
                emissionUnitID: { ErrorMsg: '', required: true, alphaNumeric: true, tooManyLetters: true },
                peerUnitName: { ErrorMsg: '', required: true, alphaNumeric: true },
    
            }
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let newState = Object.assign({}, this.state);
        newState.user[name] = value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        let newObj = Object.assign({}, this.state.user);
        window.alert(`You submitted:\n\n${JSON.stringify(this.state.user, null, 2)}`)
        localStorage.setItem('NonSolarBTMGenFormData', JSON.stringify(this.state.user));


        let inValid = false;
        Object.keys(this.state.user).map((v) => {
            if (this.state.fieldValidationErrors[v])
                inValid = (this.isValid(v, this.state.user[v])) || inValid;
        });

        if (!inValid) {
            console.log("invalid " + inValid);
            dispatch(actions.register_user(newObj));
        }
    }

    isValid = (name, value) => {
        let inValid = false;
        let newState = Object.assign({}, this.state);
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
            <NonSolarBTMGenFormComponent
                handleSubmitF={this.handleSubmit}
                UserP={this.state.user}
                handleChangeA={this.handleChange}

                ValidationF={this.handleValidation}
                ValidationP={this.state.fieldValidationErrors}
            >
            </NonSolarBTMGenFormComponent>
        )
    }
}

export default connect()(NonSolarBTMGenFormContainer);



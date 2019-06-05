// TODO: 1. Add the readOnly attribute, use a editMode variable in the state to set the readOnly attribute. You can eliminate display components then. 
//       2. Read and autofil some information from the earlier registration forms. 
//       3. Add checking before storing to local storage
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Actions'
import SolarGenFormComponent from '../components/SolarGenFormComponent'
import validationLib from '../helper-lib/ValidationLib'
import axios from 'axios'

class SolarGenFormContainer extends Component {
    constructor(props) {
        super(props);
        //TODO: Pass this state to the global repository
        this.state = {
            user: {
                email: '',
                address: '',
                system_name_1: '',
                system_name_2: '',
                system_size: '',
                street1: '',
                street2: '',
                city: '',
                state: '',
                country: '',
                zipOrPostalCode: '',
                ownerInfo: '',
                owner_checkbox: '',
                utility_interconn_date: '',
                online_date: '',
                utility_name: '',
                balancing_authority: '',
                region_name: '',
                tmp_array_value_1: '',
                tmp_array_value_2: '',
                tmp_array_value_3: '',
                tmp_array_value_4: '',
                systemChar: [],
                generation_entry_checkbox: '',
                meterInfo: [],
                tmp_meterInfo_1: '',
                tmp_meterInfo_2: '',
                tmp_meterInfo_3: '',
                tmp_meterInfo_4: '',
                thirdPartyReporter: '',
                docu_upload_checkbox: '',
            },
            fieldValidationErrors: {
                email: { ErrorMsg: '', validEmail: true, required: true },
                address: { ErrorMsg: '', required: true },
                system_name_1: { ErrorMsg: '', required: true, onlyAlpha: true },
                system_name_2: { ErrorMsg: '', required: true, onlyAlpha: true },
                system_size: { ErrorMsg: '', required: true, number: true, tooLow: true },
                street1: { ErrorMsg: '', required: true, alphaNumeric: true },
                street2: { ErrorMsg: '', required: true, alphaNumeric: true },
                city: { ErrorMsg: '', required: true, onlyAlpha: true },
                country: { ErrorMsg: '', required: true, onlyAlpha: true },
                zipOrPostalCode: { ErrorMsg: '', required: true, Zip_code: true },
                ownerInfo: { ErrorMsg: '', required: true },
                utility_interconn_date: { ErrorMsg: '', required: true, year_date_check: true },
                online_date: { ErrorMsg: '', required: true, month_date_check: true },
                utility_name: { ErrorMsg: '', required: true, alphaNumeric: true },
                balancing_authority: { ErrorMsg: '', required: true, alphaNumeric: true },
                region_name: { ErrorMsg: '', required: true, onlyAlpha: true },
                tmp_array_value_1: { ErrorMsg: '', required: true, number: true },
                tmp_array_value_2: { ErrorMsg: '', required: true, number: true },
                tmp_array_value_3: { ErrorMsg: '', required: true, tilt: true },
                tmp_array_value_4: { ErrorMsg: '', required: true, orientation: true },
                tmp_meterInfo_1: { ErrorMsg: '', required: true, alphaNumeric: true },
                tmp_meterInfo_2: { ErrorMsg: '', required: true, number: true, tooLow: true },
                tmp_meterInfo_3: { ErrorMsg: '', required: true, year_date_check: true },
                tmp_meterInfo_4: { ErrorMsg: '', required: true, number: true }
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
        localStorage.setItem('SolarGenFormData', JSON.stringify(this.state.user));

        const formData = JSON.stringify(this.state.user)
       

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


    handleArraySubmit = (e) => {
        let tmp_arr_val = []
        const { name } = e.target;
        switch (name) {
            case 'systemChar':

                let inValid = false;
                let tmp_arr = ['tmp_array_value_1', 'tmp_array_value_2', 'tmp_array_value_3', 'tmp_array_value_4'];
                tmp_arr.map((v) => {
                    if (this.state.fieldValidationErrors[v])
                        inValid = (this.isValid(v, this.state.user[v])) || inValid;

                });

                if (!inValid) {

                    /*tmp_arr.map( (v) =>{
                        this.state.user.systemChar.push({v: this.state.user[v]});
                    });*/

                    this.state.user.systemChar.push({

                        tmp_array_value_1: this.state.user['tmp_array_value_1'],
                        tmp_array_value_2: this.state.user['tmp_array_value_2'],
                        tmp_array_value_3: this.state.user['tmp_array_value_3'],
                        tmp_array_value_4: this.state.user['tmp_array_value_4']

                    })
                    this.setState({
                        tmp_array_value_1: 0,
                        tmp_array_value_2: 0,
                        tmp_array_value_3: 0,
                        tmp_array_value_4: 0,
                        array_value: tmp_arr_val
                    })
                }
                break;
            case 'meterInfo':

                let inValid2 = false;
                let tmp_arr2 = ['tmp_meterInfo_1', 'tmp_meterInfo_2', 'tmp_meterInfo_3', 'tmp_meterInfo_4'];
                tmp_arr2.map((v) => {
                    if (this.state.fieldValidationErrors[v])
                        inValid2 = (this.isValid(v, this.state.user[v])) || inValid2;

                });

                if (!inValid2) {

                    this.state.user.meterInfo.push({
                        tmp_meterInfo_1: this.state.user['tmp_meterInfo_1'],
                        tmp_meterInfo_2: this.state.user['tmp_meterInfo_2'],
                        tmp_meterInfo_3: this.state.user['tmp_meterInfo_3'],
                        tmp_meterInfo_4: this.state.user['tmp_meterInfo_4']

                    })
                    this.setState({
                        tmp_meterInfo_1: 0,
                        tmp_meterInfo_2: 0,
                        tmp_meterInfo_3: 0,
                        tmp_meterInfo_4: 0,
                        meterInfo: tmp_arr_val
                    })
                }
                break;
            default:
                console.log("Error!")
                break;
        }
        console.log(this.state)

    }

    handleDeleteItem = (e) => {
        let pop_value = e.target.value;
        const { name } = e.target;


        console.log("value:", e.target.value)

        switch (name) {
            case 'systemChar':
                this.state.user.systemChar.splice(pop_value, 1);
                this.setState({ systemChar: this.state.user.systemChar });
                break;
            case 'meterInfo':
                this.state.user.meterInfo.splice(pop_value, 1);
                this.setState({ meterInfo: this.state.user.meterInfo });
                break;
            default:
                console.log("Error!")
                break;
        }
    }



    render() {
        return (
            <SolarGenFormComponent
                handleSubmitF={this.handleSubmit}
                UserP={this.state.user}
                handleChangeA={this.handleChange}
                handleSubmitA={this.handleArraySubmit}
                handleDeleteItem={this.handleDeleteItem}

                ValidationF={this.handleValidation}
                ValidationP={this.state.fieldValidationErrors}
            >
            </SolarGenFormComponent>
        )
    }
}

export default connect()(SolarGenFormContainer);



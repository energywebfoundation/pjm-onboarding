import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Actions'
import NewThermalGenFormComponent from '../components/NewThermalGenFormComponent'
import validationLib from '../helper-lib/ValidationLib'

class NewThermalGenFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
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
                generation_entry_checkbox: '',
                thirdPartyReporter: '',
                docu_upload_checkbox: '',
                numberOfModules: '',
                moduleManufacturer: '',
                sys_model: '',
                annualEstOutput: '',
                meterManufacturer: '',
                meterMake: '',
                meterModel: '',
                meterCertified: '',
                meterInfo: [],
                tmp_meterInfo_1: '',
                tmp_meterInfo_2: '',
                tmp_meterInfo_3: '',
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
                system_name_1: { ErrorMsg: '', required: true, onlyAlpha: true },
                system_name_2: { ErrorMsg: '', required: true, onlyAlpha: true },
                system_size: { ErrorMsg: '', required: true, number: true, tooLow: true },
                state: { ErrorMsg: '', required: true, onlyAlpha: true },
                country: { ErrorMsg: '', required: true, onlyAlpha: true },
                zipOrPostalCode: { ErrorMsg: '', required: true, Zip_code: true },
                ownerInfo: { ErrorMsg: '', required: true },
                online_date: { ErrorMsg: '', required: true, month_date_check: true },
                utility_name: { ErrorMsg: '', required: true, alphaNumeric: true },
                balancing_authority: { ErrorMsg: '', required: true, alphaNumeric: true },
                region_name: { ErrorMsg: '', required: true, onlyAlpha: true },
                numberOfModules: { ErrorMsg: '', number: true },
                moduleManufacturer: { ErrorMsg: '', onlyAlpha: true },
                sys_model: { ErrorMsg: '', alphaNumeric: true },
                annualEstOutput: { ErrorMsg: '', required: true, number: true, tooLow: true },
                meterManufacturer: { ErrorMsg: '', onlyAlpha: true },
                meterMake: { ErrorMsg: '', alphaNumeric: true },
                meterModel: { ErrorMsg: '', alphaNumeric: true },
                meterCertified: { ErrorMsg: '' },
                tmp_meterInfo_1: { ErrorMsg: '', required: true, number: true },
                tmp_meterInfo_2: { ErrorMsg: '', required: true, year_date_check: true },
                tmp_meterInfo_3: { ErrorMsg: '', required: true, number: true },
                generation_entry_checkbox: { ErrorMsg: '' },
                thirdPartyReporter: '',
                docu_upload_checkbox: '',
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
        localStorage.setItem('NewThermalGenFormData', JSON.stringify(this.state.user));


        let inValid = false;
        Object.keys(this.state.user).map((v) => {
            if (this.state.fieldValidationErrors[v])
                inValid = (this.isValid(v, this.state.user[v])) || inValid;
                return 0;
        });

        if (!inValid) {
            console.log("invalid " + inValid);
            dispatch(actions.register_user(newObj));
            return 0;
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
                    })
                    this.setState({
                        tmp_meterInfo_1: 0,
                        tmp_meterInfo_2: 0,
                        tmp_meterInfo_3: 0,
                        meterInfo: tmp_arr_val
                    })
                }
                break;
            default:
                console.log("Error!")
                break;

        }
    }

    handleDeleteItem = (e) => {
        let pop_value = e.target.value;
        const { name } = e.target;

        switch (name) {
            case 'meterInfo':
                this.state.user.meterInfo.splice(pop_value, 1);
                this.setState({ meterInfo: this.state.user.meterInfo });
                break
            default:
                console.log("Error!")
                break;
        }
    }

    render() {
        return (
            <NewThermalGenFormComponent
                handleSubmitF={this.handleSubmit}
                UserP={this.state.user}
                handleChangeA={this.handleChange}
                handleSubmitA={this.handleArraySubmit}
                handleDeleteItem={this.handleDeleteItem}

                ValidationF={this.handleValidation}
                ValidationP={this.state.fieldValidationErrors}

            >
            </NewThermalGenFormComponent>
        )
    }
}

export default connect()(NewThermalGenFormContainer);



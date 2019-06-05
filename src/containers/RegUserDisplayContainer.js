import React, { Component } from 'react';
import RegUserDisplayComponent from '../components/RegUserDisplayComponent'
import RegUserDetailsDisplayComponent from '../components/RegUserDetailsDisplayComponent'
import RegUserComponent from '../components/RegUserComponent'
import * as actions from '../store/actions/Actions'
import validationLib from '../helper-lib/ValidationLib'
let EditMode = false;

class RegUserDisplayContainer extends Component {
   
    constructor(props) {
        super(props);
        var users = localStorage.getItem('users') == null ? new Array() : JSON.parse(localStorage.getItem('users'));
        this.state = { 
            userindex: 0,
            showModal: false,
            user: users[0],
            fieldValidationErrors: {
                companyName: { ErrorMsg: '', required: true },
                firstName: { ErrorMsg: '', required: true },
                lastName: { ErrorMsg: '', required: true },
                address1: { ErrorMsg: '', required: true },
                city: { ErrorMsg: '', required: true, onlyAlpha: true },
                country: { ErrorMsg: '', required: true, onlyAlpha: true },
                zipOrPostalCode: { ErrorMsg: '', required: true, Zip_code: true },
                phoneNum: { ErrorMsg: '', validPhoneNum: true },
                faxNum: { ErrorMsg: '', validPhoneNum: true },
                email: { ErrorMsg: '', validEmail: true },
                login: { ErrorMsg: '', required: true, tooLargeUserName: true, alphaNumeric: true },
                password: {
                    ErrorMsg: '', required: true, minOneNumberUserPasswordCriteriaCheck: true,
                    minOneLetterUserPasswordCriteriaCheck: true, tooSmallUserPasswordCriteriaCheck: true
                },
                password2: {
                    ErrorMsg: '', required: true, minOneNumberUserPasswordCriteriaCheck: true,
                    minOneLetterUserPasswordCriteriaCheck: true, tooSmallUserPasswordCriteriaCheck: true
                },
                securityQuestion: { ErrorMsg: '', required: true },
                securityAnswer: { ErrorMsg: '', required: true },
                billingContactPerson: { ErrorMsg: '', required: true },
                address1ContactPerson: { ErrorMsg: '', required: true },
                cityContactPerson: { ErrorMsg: '', required: true },
                countryContactPerson: { ErrorMsg: '', required: true },
                zipOrPostalcodeContactPerson: { ErrorMsg: '', required: true },
                phoneNumContactPerson: { ErrorMsg: '', validPhoneNum: true },
                emailContactPerson: { ErrorMsg: '', validEmail: true }
            }
        };
        EditMode=false;
    }

    handleDisplayDetails = (e) => {
        /*this.setState({
            showModal: true
        })*/

         const { name, value } = e.target;
         let newState = Object.assign({}, this.state);
         newState.userindex = parseInt(name);
         newState.showModal = true;
         this.setState(newState);
    }

    handleApproveReject= (e) => {
        localStorage.setItem('accHolder', '');
        let newState = Object.assign({}, this.state);
        newState.showModal = false;
        this.setState(newState);
    }
    handleEditClick = (e) => {
        EditMode=true;
        const { name, value } = e.target;
        let newState = Object.assign({}, this.state);
        newState.userindex = parseInt(name);
        this.setState(newState);
        

        var users = localStorage.getItem('users') == null ? new Array() : JSON.parse(localStorage.getItem('users'));
        console.log("state before: "+JSON.stringify(this.state.user))
        this.state.user = users[name]
        console.log("state after: "+JSON.stringify(this.state.user))

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let newState = Object.assign({}, this.state);

        newState.user[name] = e.target.type === 'checkbox' ? e.target.checked : value;
        this.setState(newState);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let newObj = Object.assign({}, this.state.user);
        console.log(this.state.userindex)
        let inValid = false;
        Object.keys(this.state.user).map((v) => {
            if (this.state.fieldValidationErrors[v])
                inValid = (this.isValid(v, this.state.user[v])) || inValid;
        });

        if (!inValid) {
            /////PUTTING IN LOCAL STORAGE FOR TESTING
            let newObj = Object.assign({}, this.state.user);
            var users = null;
            if (localStorage.getItem('users') == null) {
                users = new Array(newObj);
            }
            else {
                users = JSON.parse(localStorage.getItem('users'));
                users[this.state.userindex]=newObj;

            }
            localStorage.setItem('users', JSON.stringify(users));
            ////
            // const { dispatch } = this.props;
            // dispatch(actions.register_user(newObj));
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
        //console.log("U" + this.state.userindex);
        var users = localStorage.getItem('users') == null ? new Array() : JSON.parse(localStorage.getItem('users'));
        let usrobj = users[this.state.userindex];
       

        if(EditMode===false) {
            return (
            <div>
                <div className="container">
                    <RegUserDisplayComponent
                        UsersP={users}
                        DetailsF={this.handleDisplayDetails}
                        showModal={this.state.showModal}
                        EditF={this.handleEditClick}

                    />

                    <RegUserDetailsDisplayComponent 
                        UserP={usrobj}
                        showModal={this.state.showModal}
                        HandleEventF={this.handleApproveReject} />

                </div>
            </div>
        )
        }
        else if(EditMode===true) {
            return (
                <div>
                    <div className="container">
                        <RegUserDisplayComponent
                            UsersP={users}
                            DetailsF={this.handleDisplayDetails}
                            EditF={this.handleEditClick}
                        />
                        <RegUserComponent 
                        
                            handleChangeF={this.handleChange}
                            handleSubmitF={this.handleSubmit}

                            

                            ValidationF={this.handleValidation}
                            ValidationP={this.state.fieldValidationErrors}
                            UserP={this.state.user} 
                            ValidationP={this.state.fieldValidationErrors}/>

                    </div>
                </div>
            )

        }
        
    }
}

export default RegUserDisplayContainer;
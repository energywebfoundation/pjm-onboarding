import {USERS, DELETE_USER, REG_USER, ADD_USER, UPLOAD_FILE} from '../actions/ActionsTypes';
import {List} from 'immutable';
import {updateObject} from '../Utils'

const list = List([{id:1, name:'vinicius dias '}])
//TODO: Use actions to take the user role from the backend
//TODO: Change the logical of how the role is set into the system
//TODO: Improve all list, arrays and maps to use ImmutableJS
const initialState = {
    users: [],
    loggedIn: sessionStorage.getItem('user') !== null,
    isAdmin: localStorage.getItem('pjmAdmin') !== null,
    isUser: localStorage.getItem('newUser') !== null,
    isAccountHolder: localStorage.getItem('accHolder') !== null,
    user: {
        generator: false,
        trader: false,
        thirdPartyReporter: false,
        pjmMember: false,
        parentCompanyName: '',
        subsuduariesOwner: '',
        companyName: '',
        displayContactInfo: false,
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: 'USA',
        zipOrPostalCode: '',
        phoneNum: '',
        faxNum: '',
        email: '',
        website: '',
        login: '',
        password: '',
        securityQuestion: '',
        securityAnswer: '',
        billingContactPerson: '',
        address1ContactPerson: '',
        cityContactPerson: '',
        stateContactPerson: '',
        countryContactPerson: 'USA',
        zipOrPostalcodeContactPerson: '',
        phoneNumContactPerson: '',
        emailContactPerson: '',
        aggregator: false,
        broker: false
    },
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
    },
    files: []
};

const doSomething = (state, action) => {
    const stateAux = {...state};
    stateAux.users = List(stateAux.users).concat(action.payload).toArray();
    return updateObject(stateAux,action.users);
}

const removeUserByIndex = (state, action) =>{
    const list = List(state.users);
    const newList = list.remove(action.payload.userIndex).toArray()
    const aux =  {...state, users:newList};
    return updateObject(aux)
}

const regUser = (state, action) =>{
    const stateAux = {...state};
    stateAux.users = List(stateAux.users).concat(action.payload).toArray();
    return updateObject(stateAux,action.users);
}

const addUser = (state, action) => {
    const stateAux = {...state};
    //TODO: Change the way that we are identifying the user in the system
    stateAux.isAdmin = localStorage.getItem('pjmAdmin') !== null ? true : false;
    stateAux.isUser = localStorage.getItem('newUser') !== null ? true : false;
    stateAux.isAccountHolder = localStorage.getItem('accHolder') !== null ? true : false;
    stateAux.user = action.user;
    return updateObject(stateAux, action.user);
}

const uploadFile = (state, action) =>{
    const files = List(state.files).concat(action.payload)
    return updateObject({...state, files: files})
}

const Reducers = (state=initialState, action) => {
    switch(action.type){
        //TODO: Review actions
        case USERS: return doSomething(state, action);        
        case DELETE_USER: return removeUserByIndex(state, action);
        case REG_USER: return regUser(state, action);
        case UPLOAD_FILE: return uploadFile(state, action);
        //TODO: Set a action to put the information on the backend
        case ADD_USER: return addUser(state, action);
        default: return state;
    }
}

export default Reducers
const validationLib = {
    required: (value, param) => (value.length > 0 ? '' : 'This field is required.'),
    validEmail: (value, param) => (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) ? '' : 'Invalid email.'),
    validPhoneNum: (value, param) => (value.match(/^((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/i) ? '' : 'Invalid phone number.'),


// Note: Use ^ to define when the regex should interpret as line start. Without it
// it will include 190.00 as a valid term even when you just want 0.00-90.00, as it starts capture
// after the 1. So by using ^, you force it to include the 1 and to reject the expression as a match. 



    number : value =>
        value && isNaN(Number(value)) ? 'Must be a number' : '',

    tooLow : value =>
        value && value < 1
            ? 'You do not meet the minimum kW requirement!'
            : '',

    tooManyLetters : value =>
         value && value.trim().length > 6
            ? 'Too many characters!'
            : '',        

    tooLargeUserName : value =>
        value && value.trim().length > 20
            ? 'Too many characters!'
            : '',   

    month_date_check : (value,param) =>
        value && !/^(0[1-9]|10|11|12)(\/)(20|19)[0-9]{2}$/i.test(value) // mm/yyyy
            ? 'Invalid date entered'
            : '',

    year_date_check : value =>
        value && !/^(0[1-9]|10|11|12)(\/)([0-2][0-9]|30|31)(\/)(20|19)[0-9]{2}$/i.test(value) // mm/dd/yyyy
            ? 'Invalid date entered'
            : '',

    alphaNumeric : value =>
        value && /[^a-zA-Z0-9]/i.test(value)
            ? 'Only alphanumeric characters'
            : '',

    onlyAlpha : value =>
        value && /[^a-zA-Z ]/i.test(value)
        ? 'No numbers or special characters are allowed'
        : '',

    tooSmallUserPasswordCriteriaCheck : value =>
        value && value.length < 6
           ? 'Too few characters!'
           : '', 

    minOneLetterUserPasswordCriteriaCheck : value =>
        value && /[a-zA-Z]/i.test(value)
            ? ''
            : 'Atleast one letter needed!', 

    minOneNumberUserPasswordCriteriaCheck : value =>
        value && /[0-9]/i.test(value)
             ? ''
             : 'Atleast one number needed!', 

    Zip_code : value =>
        value && !/^(0|[1-9][0-9]{4})$/i.test(value)
            ? 'Invalid zip code, must be 5 digits'
            : '',

    tilt : value =>
        value && !/^([0-8][0-9])(\.)([0-9]{2})$|^90.00$/i.test(value)
            ? 'Invalid tilt value'
            :'',
    orientation : value =>
    value && !/(^([0-9]{2}(\.)[0-9]{2})$|^([0-2][0-9]{2}(\.)[0-9]{2})$|^([3][0-5][0-9](\.)[0-9]{2})$|^360.00$)/i.test(value)
        ? 'Invalid tilt value'
        :''
}

export default validationLib;

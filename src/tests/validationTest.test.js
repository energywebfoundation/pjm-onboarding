import validationLib from '../helper-lib/ValidationLib'

describe('test function that verifies if required is valid' , function () {
  test('matches if alphabet is valid', () => {
    expect(validationLib.required('a')).toEqual(expect.stringContaining(''))
  })
  test('matches if number is valid', () => {
    expect(validationLib.required(1)).toEqual(expect.stringContaining(''))
  })
  test('matches if special char is valid', () => {
    expect(validationLib.required('!')).toEqual(expect.stringContaining(''))
  })
  test('matches if combination is valid', () => {
    expect(validationLib.required('abc123#')).toEqual(expect.stringContaining(''))
  })
});

describe('test function that verifies if email is valid' , function () {
  test('matches if alphabet email is valid', () => {
    expect(validationLib.validEmail('a@b.com')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet email is valid', () => {
    expect(validationLib.validEmail('a@aol.com')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet email is valid', () => {
    expect(validationLib.validEmail('a@gmail.com')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet email is valid', () => {
    expect(validationLib.validEmail('a.bc@gmail.com')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet email is valid', () => {
    expect(validationLib.validEmail('a.b1@gmail.com')).toEqual(expect.stringContaining(''))
  })
  test('matches if large email is valid', () => {
    expect(validationLib.validEmail('1234567890123456789012345678901234567890123456789012345678901234@iana.org')).toEqual(expect.stringContaining(''))
  })
  test('matches if two dot email is valid', () => {
    expect(validationLib.validEmail('two..dot@iana.org')).toEqual(expect.stringContaining('Invalid email.'))
  })
  test('matches if double @ is valid', () => {
    expect(validationLib.validEmail('first\@last@iana.org')).toEqual(expect.stringContaining('Invalid email.'))
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.validEmail('a')).toEqual(expect.stringContaining('Invalid email.'))
  })
  test('matches if number is valid', () => {
    expect(validationLib.validEmail('1')).toEqual(expect.stringContaining('Invalid email.'))
  })
  test('matches if special char is valid', () => {
    expect(validationLib.validEmail('!')).toEqual(expect.stringContaining('Invalid email.'))
  })
  test('matches if combination is valid', () => {
    expect(validationLib.validEmail('abc123#')).toEqual(expect.stringContaining('Invalid email.'))
  })
});

describe('test function that verifies if phone number is valid' , function () {
  test('matches if phone number is valid', () => {
    expect(validationLib.validPhoneNum('(123)-456-7890')).toEqual(expect.stringContaining(''))
  })
  test('matches if phone number is valid', () => {
    expect(validationLib.validPhoneNum('(12a)-456-7890')).toEqual(expect.stringContaining('Invalid phone number.'))
  })
  test('matches if phone number is valid', () => {
    expect(validationLib.validPhoneNum('(1233)-456-7890')).toEqual(expect.stringContaining('Invalid phone number.'))
  })
  test('matches if phone number is valid', () => {
    expect(validationLib.validPhoneNum('(122)-3456-7890')).toEqual(expect.stringContaining('Invalid phone number.'))
  })
  test('matches if phone number is valid', () => {
    expect(validationLib.validPhoneNum('(123)--456-7890')).toEqual(expect.stringContaining('Invalid phone number.'))
  })
});

describe('test function that verifies numbers' , function () {
  test('matches if alphabet is identified as not a number', () => {
    expect(validationLib.number('a')).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if number is identified ', () => {
    expect(validationLib.number(1)).toEqual(expect.stringContaining(''))
  })
  test('matches if string with a number is a false positive ', () => {
    expect(validationLib.number('1')).toEqual(expect.stringContaining(''))
  })
  test('matches if string is a false positive ', () => {
    expect(validationLib.number("Hello")).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if special characters is a false positive ', () => {
    expect(validationLib.number('#')).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if decimal characters is a false positive ', () => {
    expect(validationLib.number('1.2')).toEqual(expect.stringContaining(''))
  })
  test('matches if decimal characters is a false positive ', () => {
    expect(validationLib.number(1.312)).toEqual(expect.stringContaining(''))
  })
  test('matches if incomplete decimal characters is a false positive ', () => {
    expect(validationLib.number(1.)).toEqual(expect.stringContaining(''))
  })
  test('matches if largest number is a positive ', () => {
    expect(validationLib.number(9007199254740992 + 4)).toEqual(expect.stringContaining(''))
  })
  test('matches if number plus word is a negative ', () => {
    expect(validationLib.number("4 days")).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if number plus symbol is a negative ', () => {
    expect(validationLib.number('>' + 4)).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if multiple decimals is a negative ', () => {
    expect(validationLib.number('4.,4')).toEqual(expect.stringContaining('Must be a number'))
  })
  test('matches if blank is a negative ', () => {
    expect(validationLib.number('')).toEqual(expect.stringContaining(''))
    // false: the empty string is converted to 0 which is not NaN
  })
  test('matches if multiple decimals is a positive ', () => {
    expect(validationLib.number(0.00)).toEqual(expect.stringContaining(''))
  })
  test('matches if negative number is a positive ', () => {
    expect(validationLib.number(-4)).toEqual(expect.stringContaining(''))
  })
  test('matches if international number notations is a positive ', () => {
    expect(validationLib.number(12,345.67)).toEqual(expect.stringContaining(''))
  })
  test('matches if rounding error notations is a positive ', () => {
    expect(validationLib.number(.3+.6)).toEqual(expect.stringContaining(''))
  })
  test('matches if rounding error notations is a positive ', () => {
    expect(validationLib.number(-4e+30)).toEqual(expect.stringContaining(''))
  })

// here are a couple sample ideas for testing numbers:
// Fields left blank (null)
// Very long numeric strings
// Multiple decimals and commas (eg, "4..4" and "4,,434.4.4")
// Boundary Value Analysis:
// Lower Boundary
// Lower Boundary - 1 (for decimal/float, use smaller amounts)
// Upper Boundary
// Upper Boundary + 1
// Far below the lower boundary (eg, beyond the hardware boundary value)
// Far above the upper boundary
// middle of the range
// 0
// 0.0
// White space, nothing else " "
// String input & other incorrect data types.
// Number with text in front or back, eg "$5.00", "4 lbs", "about 60", "50+"
// Negative numbers
// + sign with positive numbers, "+4"
// Both plus and minus sign, eg "+-4" and "-4e+30"
// Exponents of 10, both uppercase and lowercase, positive and negative eg "4e10", "-5E-10", "+6e+60", etc
// Too many "e" characters, eg "4e4e4" "4EE4"
// Impossibly large/small exponents or inappropriate ones
// Decimal values that cannot be represented in a computer
// eg, .3 + .6 == 1.0? This bug affects most hardware, so outputs that compare decimal values should allow for a degree of error.
// Integer/hardware overflow. Eg, for 32-bit integers, what happens when adding 4 billion to 4 billion?
// wrong use of decimal sign and thousands seperator ("," vs. ".") (MikeD)
// internationalisation i18n issues: In english aplications you write "12,345.67" meaning "12345.67" in german you write "12345,67" – (k3b)
// leading 0's don't make number octal (common javascript bug)

});

describe('test function that verifies if minimum kW requirement is met' , function () {
  test('matches if alphabet meets kW requirement', () => {
    expect(validationLib.tooLow('a')).toEqual(expect.stringContaining(''))
    //Needs to be used in co-operation with numbers check, else all letters will give false positives
  })
  test('matches if 1 meets kW requirement', () => {
    expect(validationLib.tooLow(1)).toEqual(expect.stringContaining(''))
  })
  test('matches if decimal below 1 meets kW requirement', () => {
    expect(validationLib.tooLow(0.5)).toEqual(expect.stringContaining('You do not meet the minimum kW requirement!'))
  })
  test('matches if decimal below 1 meets kW requirement', () => {
    expect(validationLib.tooLow(0.0001)).toEqual(expect.stringContaining('You do not meet the minimum kW requirement!'))
  })
  test('matches if exponential meets kW requirement', () => {
    expect(validationLib.tooLow(-4e+30)).toEqual(expect.stringContaining('You do not meet the minimum kW requirement!'))
  })
});

describe('test function that verifies if number of characters are too many' , function () {
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooManyLetters('a')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooManyLetters('aaaaaa')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooManyLetters("aaaaaab")).toEqual(expect.stringContaining('Too many characters!'))
  })
  test('matches if alphabet and number is above character limit', () => {
    expect(validationLib.tooManyLetters('1asdasdwqewq')).toEqual(expect.stringContaining('Too many characters!'))
  })
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooLargeUserName('a')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooLargeUserName('aaaaaa')).toEqual(expect.stringContaining(''))
  })
  test('matches if alphabet is below character limit', () => {
    expect(validationLib.tooLargeUserName("11111111111111111111111111111111111")).toEqual(expect.stringContaining('Too many characters!'))
  })
  test('matches if alphabet and number is above character limit', () => {
    expect(validationLib.tooLargeUserName('1asdasdwqeasdasdqweq41324fadsqweqewadwsdfqwwq')).toEqual(expect.stringContaining('Too many characters!'))
  })
  
});

describe('test function that verifies if month/year format is correct' , function () {
  test('matches if normal date is valid', () => {
    expect(validationLib.month_date_check('12/2012')).toBe('')
  })
  test('matches if wrong date is invalid', () => {
    expect(validationLib.month_date_check('13/2012')).toBe('Invalid date entered')
  })
  test('matches if truncated date is invalid', () => {
    expect(validationLib.month_date_check('3/2012')).toBe('Invalid date entered')
  })
  test('matches if truncated year is invalid', () => {
    expect(validationLib.month_date_check('03/012')).toBe('Invalid date entered')
  })
  test('matches if extended year is invalid', () => {
    expect(validationLib.month_date_check('03/22012')).toBe('Invalid date entered')
  })
  test('matches if tail extended year is invalid', () => {
    expect(validationLib.month_date_check('03/20122')).toBe('Invalid date entered')
  })
  test('matches if alphabet year is invalid', () => {
    expect(validationLib.month_date_check('3rd January, 2012')).toBe('Invalid date entered')
  })
  test('matches if reverse date is invalid', () => {
    expect(validationLib.month_date_check('2012/03')).toBe('Invalid date entered')
  })
});

describe('test function that verifies if month/day/year format is correct' , function () {
  test('matches if wrong date is invalid', () => {
    expect(validationLib.year_date_check('13/12/2012')).toBe('Invalid date entered')
  })
  test('matches if truncated date is invalid', () => {
    expect(validationLib.year_date_check('1/3/2012')).toBe('Invalid date entered')
  })
  test('matches if truncated year is invalid', () => {
    expect(validationLib.year_date_check('03/03/012')).toBe('Invalid date entered')
  })
  test('matches if extended year is invalid', () => {
    expect(validationLib.year_date_check('12/03/22012')).toBe('Invalid date entered')
  })
  test('matches if tail extended year is invalid', () => {
    expect(validationLib.year_date_check('12/03/20122')).toBe('Invalid date entered')
  })
  test('matches if alphabet year is invalid', () => {
    expect(validationLib.year_date_check('3rd January, 2012')).toBe('Invalid date entered')
  })
  test('matches if reverse date is invalid', () => {
    expect(validationLib.year_date_check('2012/03/12')).toBe('Invalid date entered')
  })
  test('matches if normal date is valid', () => {
    expect(validationLib.year_date_check('03/04/2002')).toBe('')
  })
});

describe('test function that  verifies if alphanumeric verification is correct' , function () {
  test('matches if number is valid', () => {
    expect(validationLib.alphaNumeric(11)).toBe('')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.alphaNumeric('abc')).toBe('')
  })
  test('matches if combination of alphabets and numbers is valid', () => {
    expect(validationLib.alphaNumeric('abc123')).toBe('')
  })
  test('matches if date is flagged as non alphanumeric', () => {
    expect(validationLib.alphaNumeric('13/12/2012')).toBe('Only alphanumeric characters')
  })
  test('matches if special charachter is invalid', () => {
    expect(validationLib.alphaNumeric('abc123!')).toBe('Only alphanumeric characters')
  })
  test('matches if spaces is invalid', () => {
    expect(validationLib.alphaNumeric('abc 123!')).toBe('Only alphanumeric characters')
  })
});

describe('test function that  verifies if onlyAlpha verification is correct' , function () {
  test('matches if number is valid', () => {
    expect(validationLib.onlyAlpha(11)).toBe('No numbers or special characters are allowed')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.onlyAlpha('abc')).toBe('')
  })
  test('matches if combination of alphabets and numbers is valid', () => {
    expect(validationLib.onlyAlpha('abc123')).toBe('No numbers or special characters are allowed')
  })
  test('matches if date is flagged as non alphanumeric', () => {
    expect(validationLib.onlyAlpha('13/12/2012')).toBe('No numbers or special characters are allowed')
  })
  test('matches if special charachter is invalid', () => {
    expect(validationLib.onlyAlpha('abc123!')).toBe('No numbers or special characters are allowed')
  })
  test('matches if spaces is invalid', () => {
    expect(validationLib.onlyAlpha('abc 123!')).toBe('No numbers or special characters are allowed')
  })
});

describe('test function that  verifies if tooSmallUserPasswordCriteriaCheck verification is correct' , function () {
  test('matches if number is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('11')).toBe('Too few characters!')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('abc')).toBe('Too few characters!')
  })
  test('matches if combination of alphabets and numbers is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('abc123')).toBe('')
  })
  test('matches if date is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('13/12/2012')).toBe('')
  })
  test('matches if special charachter is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('abc123!')).toBe('')
  })
  test('matches if spaces is valid', () => {
    expect(validationLib.tooSmallUserPasswordCriteriaCheck('abc 123!')).toBe('')
  })
});

describe('test function that  verifies if minOneLetterUserPasswordCriteriaCheck verification is correct' , function () {
  test('matches if number is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('11')).toBe('Atleast one letter needed!')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('abc')).toBe('')
  })
  test('matches if combination of alphabets and numbers is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('abc123')).toBe('')
  })
  test('matches if date is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('13/12/2012')).toBe('Atleast one letter needed!')
  })
  test('matches if special charachter is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('abc123!')).toBe('')
  })
  test('matches if spaces is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('abc 123!')).toBe('')
  })
  test('matches if special char is valid', () => {
    expect(validationLib.minOneLetterUserPasswordCriteriaCheck('######')).toBe('Atleast one letter needed!')
  })
});

describe('test function that  verifies if minOneNumberUserPasswordCriteriaCheck verification is correct' , function () {
  test('matches if number is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('11')).toBe('')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('abc')).toBe('Atleast one number needed!')
  })
  test('matches if combination of alphabets and numbers is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('abc123')).toBe('')
  })
  test('matches if date is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('13/12/2012')).toBe('')
  })
  test('matches if special charachter is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('abc123!')).toBe('')
  })
  test('matches if spaces is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('abc 123!')).toBe('')
  })
  test('matches if special char is valid', () => {
    expect(validationLib.minOneNumberUserPasswordCriteriaCheck('######')).toBe('Atleast one number needed!')
  })
});

describe('test function that  verifies if Zip_code verification is correct' , function () { 
  test('matches if zip code is valid', () => {
    expect(validationLib.Zip_code(90210)).toBe('')
  })
  test('matches if zip code as string is valid', () => {
    expect(validationLib.Zip_code('90210')).toBe('')
  })
  test('matches if number is invalid', () => {
    expect(validationLib.Zip_code('11')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if larger number is invalid', () => {
    expect(validationLib.Zip_code(111111)).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if alphabet is invalid', () => {
    expect(validationLib.Zip_code('abc')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if combination of alphabets and numbers is invalid', () => {
    expect(validationLib.Zip_code('abc123')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if date is invalid', () => {
    expect(validationLib.Zip_code('13/12/2012')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if special charachter is invalid', () => {
    expect(validationLib.Zip_code('abc123!')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if spaces is invalid', () => {
    expect(validationLib.Zip_code('abc 123!')).toBe('Invalid zip code, must be 5 digits')
  })
  test('matches if special char is invalid', () => {
    expect(validationLib.Zip_code('######')).toBe('Invalid zip code, must be 5 digits')
  })
});

describe('test function that  verifies if tilt verification is correct' , function () { 
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('00.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('10.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('20.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('90.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('-10.00')).toBe('Invalid tilt value')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.tilt('190.00')).toBe('Invalid tilt value')
  })
  test('matches if zip code is invalid', () => {
    expect(validationLib.tilt(90210)).toBe('Invalid tilt value')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.tilt('abc.ss')).toBe('Invalid tilt value')
  })
  test('matches if number is valid', () => {
    expect(validationLib.tilt(12)).toBe('Invalid tilt value')
  })
  test('matches if larger angle is valid', () => {
    expect(validationLib.tilt('90.001')).toBe('Invalid tilt value')
  })
  test('matches if larger angle is valid', () => {
    expect(validationLib.tilt(91.001)).toBe('Invalid tilt value')
  })
  
});

describe('test function that  verifies if orientation verification is correct' , function () { 
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('00.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('10.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('20.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('90.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('-10.00')).toBe('Invalid tilt value')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('190.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('359.99')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('99.99')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('360.00')).toBe('')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('399.99')).toBe('Invalid tilt value')
  })
  test('matches if angle is valid', () => {
    expect(validationLib.orientation('360.99')).toBe('Invalid tilt value')
  })
  test('matches if zip code is invalid', () => {
    expect(validationLib.orientation(90210)).toBe('Invalid tilt value')
  })
  test('matches if alphabet is valid', () => {
    expect(validationLib.orientation('abc.ss')).toBe('Invalid tilt value')
  })
  test('matches if number is valid', () => {
    expect(validationLib.orientation(12)).toBe('Invalid tilt value')
  })
  test('matches if larger angle is valid', () => {
    expect(validationLib.orientation('90.001')).toBe('Invalid tilt value')
  })
  test('matches if larger angle is valid', () => {
    expect(validationLib.orientation(91.001)).toBe('Invalid tilt value')
  })
  
});


import React from 'react';

const UserRegUserDisplayComponent = (props) => {
    const prop_array = props.UserP;
    // var retrievedObject = localStorage.getItem('users');
    // let parsed_obj = JSON.parse(retrievedObject);
    // console.log('retrievedObject: ', retrievedObject);
    var retrievedObject = localStorage.getItem('users') == null ? new Array() : JSON.parse(localStorage.getItem('users'));
    let parsed_obj = retrievedObject[0];
    console.log('retrievedObject: ', retrievedObject);
    
    return (
        <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>
            <div className="card">
                <div className="card-header"> Register User </div>
            </div>
            <div className="card">
                <small id="emailHelp" className="form-text text-muted">&nbsp;&nbsp;&nbsp;&nbsp;(key = * Required field)</small>
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Account Type:* </label>
                        <div className="col-sm-8">
                            <label> {parsed_obj.generator} </label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"  >PJM Member:* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.pjmMember}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"   >Parent Company Name: </label>
                        <div className="col-sm-8"><label>{parsed_obj.parentCompanyName}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Wholly Owner Subsidiaries:* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.subsuduariesOwner}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Company Name:* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.companyName}</label></div>
                    </div>
                </div>

            </div>



            <div className="card">
                <div className="card-header">GATS-Specific Contact Info</div>
                <div className="card-body">


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> First Name:*</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.firstName}</label></div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label">Last Name:*</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.lastName}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label">Address 1</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.street1}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Address 2</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.street2}</label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >City</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.city}</label>
                        </div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Country</label>
                        <div className="col-sm-8"> 
                            <label>{parsed_obj.country}</label>
                        </div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"  >Zip or Postal Code</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.zipOrPostalCode}</label>
                            <small id="emailHelp" className="form-text text-muted">(US 12345/Canadian a1b 23c)</small>
                        </div>

                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Phone Number:*</label>
                        <div className="col-sm-8">
                            <div className="form-check form-check-inline">
                                <label>{parsed_obj.phoneNum}</label>
                            </div>

                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Fax Number:</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.faxNum}</label>
                    </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Web Site:</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.website}</label>
                    </div>
                </div>
            </div>
            </div>
            <div className="card">
                <div className="card-header"> Choose your Login Name and Password </div>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Login Name:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.login}</label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Password:*</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.password}</label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Confirmation Password:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.password2}</label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Security Question:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.securityQuestion}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Security Answer:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.securityAnswer}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">Billing Information</div>
                <div className="card-body">

                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Contact Person:*</label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.billingContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Address 1:* </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.address1ContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Address 2:* </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.address2ContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >City:*   </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.cityContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Country:*   </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.countryContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Zip or Postal Code:*   </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.zipOrPostalcodeContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Phone Number:*   </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.phoneNumContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Fax Number:  </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.faxNumContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >E-mail:*  </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.emailContactPerson}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Department/Location:</label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.departmentOrLocationContactPerson}</label>
                    </div>
                </div>



                </div>
            </div>
        </div>

    )
}

export default UserRegUserDisplayComponent;

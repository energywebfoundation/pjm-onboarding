import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegUserComponent extends Component {

    render() {
        return (
            <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>
                <div className="card" style={{ backgroundColor: '#343a40', padding: 20, marginTop: 5 }}>
                    <h4 className="d-flex justify-content-center" style={{ color: '#FFF', marginTop: 20 }}>
                        GATS &nbsp;|&nbsp; New Account
                            </h4>
                </div>
                <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-header">Featured</div>
                    <div className="card-body">

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" >Account Type:*</label>
                            <div className="col-sm-8">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="defaultCheck1" name="generator" checked={this.props.UserP.generator} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label">Generator</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="trader" id="defaultCheck1" checked={this.props.UserP.trader} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" > Trader</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="thirdPartyReporter" id="defaultCheck1" checked={this.props.UserP.thirdPartyReporter} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" >Third Party Reporter</label>
                                </div>
                                <small className="form-text text-muted">(Cannot combine Third Party with any other account type)</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" > PJM Member:</label>
                            <div className="col-sm-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="pjmMember" id="defaultCheck1" checked={this.props.UserP.pjmMember} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" > PJM Member</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="pcomnametxt">Parent Company Name:</label>
                            <div className="col-sm-8"><input type="text" id="pcomnametxt" className="form-control" name="parentCompanyName"
                                value={this.props.UserP.parentCompanyName} onChange={this.props.handleChangeF} /></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="wostxt" >Wholly Owned Subsidiaries:</label>
                            <div className="col-sm-8"><input type="text" id="wostxt" className="form-control" name="subsuduariesOwner"
                                value={this.props.UserP.subsuduariesOwner} onChange={this.props.handleChangeF} /></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="cntxt">Company Name:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} id="cntxt" className={"form-control" + (this.props.ValidationP.companyName.ErrorMsg ? " is-invalid" : "")} name="companyName"
                                value={this.props.UserP.companyName} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.companyName.ErrorMsg}</div></div>
                        </div>
                    </div>
                </div>


                <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-header">GATS-Specific Contact Info</div>
                    <div className="card-body">

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" >Display Contact Info on Account Holder Report?</label>

                            <div className="col-sm-8">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="displayContactInfo" id="defaultCheck1" checked={this.props.UserP.displayContactInfo} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Generator</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="fntxt">First Name:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="firstName" id="fntxt" className={"form-control" + (this.props.ValidationP.firstName.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.firstName} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.firstName.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="lntxt">Last Name:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="lastName" id="lntxt" className={"form-control" + (this.props.ValidationP.lastName.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.lastName} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.lastName.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="addrtxt">Address 1:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="address1" id="addrtxt" className={"form-control" + (this.props.ValidationP.address1.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.address1} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.address1.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="addr2txt">Address2</label>
                            <div className="col-sm-8"><input type="text" name="address2" id="addr2txt" className="form-control"
                                value={this.props.UserP.address2} onChange={this.props.handleChangeF} /></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="citytxt">City:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="city" id="citytxt" className={"form-control" + (this.props.ValidationP.city.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.city} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.city.ErrorMsg}</div></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="statetxt">State:*</label>
                            <div className="dropdown col-sm-8">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select State </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">State 1</a>
                                    <a className="dropdown-item" href="#">State 2</a>
                                    <a className="dropdown-item" href="#">State 3</a>
                                </div>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="countrytxt">Country:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="country" id="countrytxt" className={"form-control" + (this.props.ValidationP.country.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.country} onChange={this.props.handleChangeF} /><div className="invalid-feedback">{this.props.ValidationP.country.ErrorMsg}</div></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="zippostaltxt">Zip or Postal Code:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="zipOrPostalCode" id="zippostaltxt" className={"form-control" + (this.props.ValidationP.zipOrPostalCode.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.zipOrPostalCode} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.zipOrPostalCode.ErrorMsg}</div>
                                <small className="form-text text-muted">(US 12345/Canadian a1b 23c)</small></div>

                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="phonetxt">Phone Number:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="phoneNum" id="phonetxt" className={"form-control" + (this.props.ValidationP.phoneNum.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.phoneNum} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.phoneNum.ErrorMsg}</div>
                                <small className="form-text text-muted">(123)-456-7890</small></div>

                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="faxtxt">Fax Number:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="faxNum" id="faxtxt" className={"form-control" + (this.props.ValidationP.faxNum.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.faxNum} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.faxNum.ErrorMsg}</div>
                                <small className="form-text text-muted">(123)-456-7890</small></div>

                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="emailtxt">E-mail:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="email" id="emailtxt" className={"form-control" + (this.props.ValidationP.email.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.email} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.email.ErrorMsg}</div>
                                <small className="form-text text-muted">(abc@example.com)</small></div>

                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="webtxt">Web Site</label>
                            <div className="col-sm-8"><input type="text" name="website" id="webtxt" className="form-control"
                                value={this.props.UserP.website} onChange={this.props.handleChangeF} />
                                <small className="form-text text-muted">(www.example.com)</small></div>

                        </div>

                    </div>
                </div>

                <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-header">Choose your Login Name and Password</div>
                    <div className="card-body">

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="loginametxt">Login Name:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="login" id="loginametxt" className={"form-control" + (this.props.ValidationP.login.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.login} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.login.ErrorMsg}</div>
                                <small className="form-text text-muted">( 1 to 20 alphanumeric)</small></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="passtxt">Password:*</label>
                            <div className="col-sm-8"><input type="password" onBlur={this.props.ValidationF} name="password" id="passtxt" className={"form-control" + (this.props.ValidationP.password.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.password} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.password.ErrorMsg}</div>
                                <small className="form-text text-muted">(Minimum 7 characters with at least 1 number and 1 letter)</small></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="passtxt2">Confirmation Password:*</label>
                            <div className="col-sm-8"><input type="password" id="passtxt2" name="password2" className={"form-control" + (this.props.ValidationP.password2.ErrorMsg ? " is-invalid" : "")} />
                                <div className="invalid-feedback">{this.props.ValidationP.password2.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="loginametxt">Security Question:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="securityQuestion" id="loginametxt" className={"form-control" + (this.props.ValidationP.securityQuestion.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.securityQuestion} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.securityQuestion.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="loginametxt">Security Answer:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="securityAnswer" id="loginametxt" className={"form-control" + (this.props.ValidationP.securityAnswer.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.securityAnswer} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.securityAnswer.ErrorMsg}</div></div>
                        </div>


                    </div>
                </div>

                <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-header">Billing Information </div>
                    <div className="card-body">
                        <div><button className="btn btn-primary">Use Subscriber Information</button></div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="conpersontxt">Contact Person:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="billingContactPerson" id="conpersontxt" className={"form-control" + (this.props.ValidationP.billingContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.billingContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.billingContactPerson.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="conaddr1txt">Address 1:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="address1ContactPerson" id="conaddr1txt" className={"form-control" + (this.props.ValidationP.address1ContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.address1ContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.address1ContactPerson.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="conaddr21txt">Address 2:</label>
                            <div className="col-sm-8"><input type="text" name="addres2ContactPerson" id="conaddr2txt" className="form-control"
                                value={this.props.UserP.addres2ContactPerson} onChange={this.props.handleChangeF} /></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="citytxt">City:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="cityContactPerson" id="citytxt" className={"form-control" + (this.props.ValidationP.cityContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.cityContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.cityContactPerson.ErrorMsg}</div></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="statetxt">State:*</label>
                            <div className="dropdown col-sm-8">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select State </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">State 1</a>
                                    <a className="dropdown-item" href="#">State 2</a>
                                    <a className="dropdown-item" href="#">State 3</a>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="ccountrytxt">Country:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="countryContactPerson" id="ccountrytxt" className={"form-control" + (this.props.ValidationP.countryContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.countryContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.countryContactPerson.ErrorMsg}</div></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="czippostaltxt">Zip or Postal Code:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="zipOrPostalcodeContactPerson" id="czippostaltxt" className={"form-control" + (this.props.ValidationP.zipOrPostalcodeContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.zipOrPostalcodeContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.zipOrPostalcodeContactPerson.ErrorMsg}</div>
                                <small className="form-text text-muted">(US 12345/Canadian a1b 23c)</small></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="cphonetxt">Phone Number:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="phoneNumContactPerson" id="cphonetxt" className={"form-control" + (this.props.ValidationP.phoneNumContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.phoneNumContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.phoneNumContactPerson.ErrorMsg}</div>
                                <small className="form-text text-muted">(123)-456-7890</small></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="cfaxtxt">Fax Number:</label>
                            <div className="col-sm-8"><input type="text" name="faxNumContactPerson" id="cfaxtxt" className="form-control"
                                value={this.props.UserP.faxNumContactPerson} onChange={this.props.handleChangeF} />
                                <small className="form-text text-muted">(123)-456-7890</small></div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="cemailtxt">E-mail:*</label>
                            <div className="col-sm-8"><input type="text" onBlur={this.props.ValidationF} name="emailContactPerson" id="cemailtxt" className={"form-control" + (this.props.ValidationP.emailContactPerson.ErrorMsg ? " is-invalid" : "")}
                                value={this.props.UserP.emailContactPerson} onChange={this.props.handleChangeF} />
                                <div className="invalid-feedback">{this.props.ValidationP.emailContactPerson.ErrorMsg}</div>
                                <small className="form-text text-muted">(abc@example.com)</small></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="cdeptloctxt">Department/Location:</label>
                            <div className="col-sm-8"><input type="text" name="departmentOrLocationContactPerson" id="cdeptloctxt" className="form-control"
                                value={this.props.UserP.departmentOrLocationContactPerson} onChange={this.props.handleChangeF} /></div>
                        </div>

                    </div>
                </div>

                <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-header">Aggregator/Broker </div>
                    <div className="card-body">

                        <div className="form-group row">

                            <div className="col-sm-8">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="aggregator" id="defaultCheck1" checked={this.props.UserP.aggregator} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Aggregator</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="broker" id="defaultCheck1" checked={this.props.UserP.broker} onChange={this.props.handleChangeF} />
                                    <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Broker</label>
                                </div>
                                <small className="form-text text-muted">Check these boxes to have contact information posted on the
                                corresponding public report of Aggregator and/or Brokers.</small>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card" style={{ marginTop: 30, marginBottom: 30 }}>
                    <button className="btn btn-primary" onClick={this.props.handleSubmitF}>Submit for Approval</button>
                </div>

            </div>);

    }
}
export default RegUserComponent;
import React, { Component } from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';
import '../resources/css/modal.css'
import { Link } from 'react-router-dom';
import { throws } from 'assert';


class RegUserDetailsDisplayComponent extends Component {
  render() {

    return (
      this.props.UserP != null ?

        <div>
          <Modal animation={false} show={this.props.showModal}>
            <ModalHeader>
              <Modal.Title>Test</Modal.Title>
            </ModalHeader>
            <Modal.Body>

              <div>
                <div className="card">
                  <div className="card-header">Featured</div>
                  <div className="card-body">

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" >Account Type:*</label>
                      <div className="col-sm-8">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" id="defaultCheck1" name="generator" checked={this.props.UserP.generator} />
                          <label className="form-check-label" className="form-check-label">Generator</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="trader" id="defaultCheck1" checked={this.props.UserP.trader} />
                          <label className="form-check-label" className="form-check-label" > Trader</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="thirdPartyReporter" id="defaultCheck1" checked={this.props.UserP.thirdPartyReporter} />
                          <label className="form-check-label" className="form-check-label" >Third Party Reporter</label>
                        </div>
                        <small className="form-text text-muted">(Cannot combine Third Party with any other account type)</small>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" > PJM Member:</label>
                      <div className="col-sm-8">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="pjmMember" id="defaultCheck1" checked={this.props.UserP.pjmMember} />
                          <label className="form-check-label" className="form-check-label" > PJM Member</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="pcomnametxt">Parent Company Name:</label>
                      <div className="col-sm-8"><label id="pcomnametxt">{this.props.UserP.parentCompanyName}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="wostxt" >Wholly Owned Subsidiaries:</label>
                      <div className="col-sm-8"><label id="wostxt" > {this.props.UserP.subsuduariesOwner}</label> </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="cntxt">Company Name:*</label>
                      <div className="col-sm-8"><label id="cntxt" >{this.props.UserP.companyName}</label></div>
                    </div>
                  </div>
                </div>


                <div className="card">
                  <div className="card-header">GATS-Specific Contact Info</div>
                  <div className="card-body">

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" >Display Contact Info on Account Holder Report?</label>

                      <div className="col-sm-8">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="displayContactInfo" id="defaultCheck1" checked={this.props.UserP.displayContactInfo} />
                          <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Generator</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="fntxt">First Name:*</label>
                      <div className="col-sm-8"><label id="fntxt" >{this.props.UserP.firstName} </label></div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="lntxt">Last Name:*</label>
                      <div className="col-sm-8"><label id="lntxt" >{this.props.UserP.lastName} </label></div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="addrtxt">Address 1:*</label>
                      <div className="col-sm-8"><label id="addrtxt">{this.props.UserP.address1}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="addr2txt">Address2</label>
                      <div className="col-sm-8"><label id="addr2txt">{this.props.UserP.address2}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="citytxt">City:*</label>
                      <div className="col-sm-8"><label id="citytxt">{this.props.UserP.city}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="statetxt">State:*</label>
                      <div className="dropdown col-sm-8">
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="countrytxt">Country:*</label>
                      <div className="col-sm-8"><label id="countrytxt">{this.props.UserP.country}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="zippostaltxt">Zip or Postal Code:*</label>
                      <div className="col-sm-8"><label id="zippostaltxt">{this.props.UserP.zipOrPostalCode}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="phonetxt">Phone Number:*</label>
                      <div className="col-sm-8"><label id="phonetxt">{this.props.UserP.phoneNum}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="faxtxt">Fax Number:*</label>
                      <div className="col-sm-8"><label id="faxtxt">{this.props.UserP.faxNum}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="emailtxt">E-mail:*</label>
                      <div className="col-sm-8"><label name="email" id="emailtxt">{this.props.UserP.email} </label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="webtxt">Web Site</label>
                      <div className="col-sm-8"><label name="website" id="webtxt">{this.props.UserP.website}</label>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Choose your Login Name and Password</div>
                  <div className="card-body">

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="loginametxt">Login Name:*</label>
                      <div className="col-sm-8"><label name="login" id="loginametxt">{this.props.UserP.login}</label>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Billing Information </div>
                  <div className="card-body">

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="conpersontxt">Contact Person:*</label>
                      <div className="col-sm-8"><label name="billingContactPerson" id="conpersontxt">{this.props.UserP.billingContactPerson}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="conaddr1txt">Address 1:*</label>
                      <div className="col-sm-8"><label name="address1ContactPerson" id="conaddr1txt">{this.props.UserP.address1ContactPerson}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="conaddr21txt">Address 2:</label>
                      <div className="col-sm-8"><label name="addres2ContactPerson" id="conaddr2txt">{this.props.UserP.addres2ContactPerson}</label>
                      </div></div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="citytxt">City:*</label>
                      <div className="col-sm-8"><label name="cityContactPerson" id="citytxt">{this.props.UserP.cityContactPerson}</label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="statetxt">State:*</label>
                      <div className="dropdown col-sm-8">

                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="ccountrytxt">Country:*</label>
                      <div className="col-sm-8"><label name="countryContactPerson" id="ccountrytxt">{this.props.UserP.countryContactPerson}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="czippostaltxt">Zip or Postal Code:*</label>
                      <div className="col-sm-8"><label name="zipOrPostalcodeContactPerson" id="czippostaltxt">{this.props.UserP.zipOrPostalcodeContactPerson}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="cphonetxt">Phone Number:*</label>
                      <div className="col-sm-8"><label name="phoneNumContactPerson" id="cphonetxt">{this.props.UserP.phoneNumContactPerson}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="cfaxtxt">Fax Number:</label>
                      <div className="col-sm-8"><label name="faxNumContactPerson" id="cfaxtxt">{this.props.UserP.faxNumContactPerson}</label>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="cemailtxt">E-mail:*</label>
                      <div className="col-sm-8"><label name="emailContactPerson" id="cemailtxt">{this.props.UserP.emailContactPerson} </label>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="cdeptloctxt">Department/Location:</label>
                      <div className="col-sm-8"><label name="departmentOrLocationContactPerson" id="cdeptloctxt">{this.props.UserP.departmentOrLocationContactPerson}</label>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Aggregator/Broker </div>
                  <div className="card-body">

                    <div className="form-group row">

                      <div className="col-sm-8">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="aggregator" id="defaultCheck1" checked={this.props.UserP.aggregator} />
                          <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Aggregator</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="broker" id="defaultCheck1" checked={this.props.UserP.broker} />
                          <label className="form-check-label" className="form-check-label" htmlFor="defaultCheck1">Broker</label>
                        </div>
                        <small className="form-text text-muted">Check these boxes to have contact information posted on the
                                corresponding public report of Aggregator and/or Brokers.</small>

                        <p className="card-text">  {this.props.UserP.firstName}</p>
                        <button className="btn btn-primary" onClick={this.props.HandleEventF}>Approve</button>
                        {/* <a href="#" className="btn btn-primary" onClick={this.props.HandleEventF}>Approve</a>  <a href="#" className="btn" onClick={this.props.HandleEventF}>Reject</a> <a href="#" className="btn" onClick={this.props.HandleEventF}>Cancel</a> */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </Modal.Body>
          </Modal>
        </div> : ""
    )
  }
}
export default RegUserDetailsDisplayComponent;
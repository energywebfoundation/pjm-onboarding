import React from 'react';

const NonSolarBTMGenFormComponent = (props) => {

    return (
        <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>
            <div className="card">
                <div className="card-header"> New Non-Solar BTM Generator Application </div>
                <div className="card-body">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  >Email address</label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.email.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="usernametxt" name="email"
                            value={props.UserP.email} onChange={props.handleChangeA} />
                            <div className="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  > Address</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.address.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} name="address"
                            value={props.UserP.addressP} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.address.ErrorMsg}</div></div>
                    </div>

                </div>
            </div>

            <div className="card">
                <small id="emailHelp" className="form-text text-muted">(key = * Required field)</small>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >PJM Generator</label>
                        <div className="col-sm-8">
                            <label> No </label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"  > Plant Name:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.plant_name.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="pcomnametxt" name="plant_name"
                            value={props.UserP.plant_name} onChange={props.handleChangeA} />
                            <div className="invalid-feedback">{props.ValidationP.plant_name.ErrorMsg}</div>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"   >Unit Name:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.unit_name.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="wostxt" name="unit_name"
                            value={props.UserP.unit_name} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.unit_name.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Name Plate Capacity:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.name_plate_capacity.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="cntxt" name="name_plate_capacity"
                            value={props.UserP.name_plate_capacity} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.name_plate_capacity.ErrorMsg}</div></div>
                    </div>
                </div>

            </div>



            <div className="card">
                <div className="card-header">Street Address</div>
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label">Street 1</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.street1.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="addrtxt" name="street1"
                            value={props.UserP.street1} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.street1.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Street 2</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.street2.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="addr2txt" name="street2"
                            value={props.UserP.street2} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.street2.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >City</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.city.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="citytxt" name="city"
                            value={props.UserP.city} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.city.ErrorMsg}</div></div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >State</label>
                        <div className="dropdown col-sm-8">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select State </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" name="state"
                                value={props.UserP.state} onChange={props.handleChangeA}>
                                <label className="dropdown-item" >State 1</label>
                                <label className="dropdown-item" >State 2</label>
                                <label className="dropdown-item" >State 3</label>
                            </div>
                        </div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Country</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.country.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="countrytxt" name="country"
                            value={props.UserP.country} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.country.ErrorMsg}</div></div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"  >Zip or Postal Code</label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.zipOrPostalCode.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="zippostaltxt" name="zipOrPostalCode"
                                value={props.UserP.zipOrPostalCode} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.zipOrPostalCode.ErrorMsg}</div>
                            <small id="emailHelp" className="form-text text-muted">(US 12345/Canadian a1b 23c)</small></div>

                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Are you the physical owner of the generating system located at this address? *</label>
                        <div className="col-sm-8">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="owner_checkbox"
                                    value={props.UserP.owner_checkbox} onChange={props.handleChangeA}
                                    id="defaultCheck1" />
                                <label className="form-check-label" >Yes</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="defaultCheck1" name="owner_checkbox"
                                    value={props.UserP.owner_checkbox} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div>
                                <label className="form-check-label"  > No </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Owner Information</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.ownerInfo.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="ownerInfo"
                            value={props.UserP.ownerInfo} onChange={props.handleChangeA} /><div className="invalid-feedback">{props.ValidationP.ownerInfo.ErrorMsg}</div>
                            <small id="emailHelp" className="form-text text-muted">This is the generator owners' information</small></div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-header"> Vintage </div>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Vintage (month and year of commercial operation):* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.online_date.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="online_date"
                            value={props.UserP.online_date} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.online_date.ErrorMsg}
                        </div>
                            <small id="online_date" className="form-text text-muted">(MM/YYYY)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Utility:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.utility_name.ErrorMsg ? " is-invalid" : "")}
                            onBlur={props.ValidationF} id="loginametxt" name="utility_name"
                            value={props.UserP.utility_name} onChange={props.handleChangeA} />
                            <div className="invalid-feedback">{props.ValidationP.utility_name.ErrorMsg}
                        </div>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Balancing Authority:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.balancing_authority.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="balancing_authority"
                            value={props.UserP.balancing_authority} onChange={props.handleChangeA} />
                            <div className="invalid-feedback">{props.ValidationP.balancing_authority.ErrorMsg}</div>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >NERC Region Type:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.region_name.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="region_name"
                            value={props.UserP.region_name} onChange={props.handleChangeA} />
                            <div className="invalid-feedback">{props.ValidationP.region_name.ErrorMsg}</div>
                       </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Repowering/Derate Date:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.derate_date.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="derate_date"
                            value={props.UserP.derate_date} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.derate_date.ErrorMsg}
                        </div>
                            <small id="derate_date" className="form-text text-muted">(MM/YYYY)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> Capacity Addition/Subtraction:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.capAddition.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="capAddition"
                            value={props.UserP.capAddition} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.capAddition.ErrorMsg}
                        </div>
                            <small id="capAddition" className="form-text text-muted">(MW)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> FERC Hydroelectric License Relicensing Date:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.relicenseDate.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="relicenseDate"
                            value={props.UserP.relicenseDate} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.relicenseDate.ErrorMsg}
                        </div>
                            <small id="relicenseDate" className="form-text text-muted">(MM/YYYY)</small>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-header">Emissions Reporting: Wind and Solar facilities do not need to enter anything into this section.</div>
                <div className="card-body">

                    <div className="form-group  row">
                            <label className="col-sm-4 col-form-label" >CEM Reporting:* </label>
                            <div className="col-sm-8">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="cemReporting"
                                        value="Yes" onChange={props.handleChangeA}
                                        id="defaultCheck1" />
                                
                                </div>
                            </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> ORIS PL:* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.orisPL.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="orisPL"
                            value={props.UserP.orisPL} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.orisPL.ErrorMsg}
                        </div>
                            <small id="orisPL" className="form-text text-muted">(1-6 numeric characters)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> Emissions Unit ID(s):* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.emissionUnitID.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="emissionUnitID"
                            value={props.UserP.emissionUnitID} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.emissionUnitID.ErrorMsg}
                        </div>
                            <small id="emissionUnitID" className="form-text text-muted">(1-6 alphanumeric characters, separate multiple ids with semicolons)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"> Peer Unit Name and Address (if not reporting actual generator emissions):* </label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.peerUnitName.ErrorMsg ? " is-invalid" : "")} 
                            onBlur={props.ValidationF} id="loginametxt" name="peerUnitName"
                            value={props.UserP.peerUnitName} onChange={props.handleChangeA}
                        />
                        <div className="invalid-feedback">{props.ValidationP.peerUnitName.ErrorMsg} </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >
                            Fuel Type:* 
                        </label>

                        <div className="dropdown col-sm-8">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Fuel Type(s) </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" name="thirdPartyReporter"
                                value={props.UserP.thirdPartyReporter} onChange={props.handleChangeA}>
                                <label className="dropdown-item" >Type 1</label>
                                <label className="dropdown-item" >Type 2</label>
                                <label className="dropdown-item" >Type 3</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group  row">
                            <label className="col-sm-4 col-form-label" > Generation Entry:* </label>
                        <div className="col-sm-8">
                            <label className="col-sm-4 col-form-label" > Actual Generation (MWh) </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" > Documents:* </label>
                        <div className="col-sm-8">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="Yes"
                                    value="docu_upload_checkbox" onChange={props.handleChangeA}
                                    id="defaultCheck1" />
                                <label className="form-check-label" >Check this box if
                                you have any documents to upload for this generator, such as Schedule A's or Interconnection documents. </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-form-label" > By submitting your information, you are attesting
                        that you have entered in the information truthfully and accurately in
                accorance with the GATS Terms of Use and the GATS Operating Rules. </label>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">

                        <div className="col-sm-2"></div>
                        <button className="col-md-4 text-center btn btn-primary"
                            onClick={props.handleSubmitF} >Submit for Approval
                        </button> &nbsp; &nbsp; &nbsp;
                        <button className="col-md-4 text-center btn btn-primary">Cancel</button>

                    </div>
                </div>
            </div>



        </div>

    )
}

export default NonSolarBTMGenFormComponent;
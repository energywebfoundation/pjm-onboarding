import React from 'react';

const SolarGenFormComponent = (props) => {
    const prop_array = props.UserP;

    return (
        <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>

            <div className="card">
                <div className="card-header">New Solar Photovoltaic Generator Application </div>
                <div className="card-body">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  >Email address</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.email.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="usernametxt" name="email"
                            value={props.UserP.email} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  > Address</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.address.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} name="address"
                            value={props.UserP.addressP} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.address.ErrorMsg}</div></div>
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
                        <label className="col-sm-4 col-form-label"  >System Name 1:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.system_name_1.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="pcomnametxt" name="system_name_1"
                            value={props.UserP.system_name_1} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.system_name_1.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"   >System Name 2:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.system_name_2.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="wostxt" name="system_name_2"
                            value={props.UserP.system_name_2} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.system_name_2.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >System Size (kW):* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.system_size.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="cntxt" name="system_size"
                            value={props.UserP.system_size} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.system_size.ErrorMsg}</div></div>
                    </div>
                </div>

            </div>



            <div className="card">
                <div className="card-header">Street Address</div>
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label">Street 1</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.street1.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="addrtxt" name="street1"
                            value={props.UserP.street1} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.street1.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Street 2</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.street2.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="addr2txt" name="street2"
                            value={props.UserP.street2} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.street2.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >City</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.city.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="citytxt" name="city"
                            value={props.UserP.city} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.city.ErrorMsg}</div></div>
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
                            value={props.UserP.country} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.country.ErrorMsg}</div></div>
                    </div>


                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"  >Zip or Postal Code</label>
                        <div className="col-sm-8">
                            <input type="text" className={"form-control" + (props.ValidationP.zipOrPostalCode.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="zippostaltxt" name="zipOrPostalCode"
                                value={props.UserP.zipOrPostalCode} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.zipOrPostalCode.ErrorMsg}</div>
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
                                    value={props.UserP.owner_checkbox} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div>
                                <label className="form-check-label"  > No </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Owner Information</label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.ownerInfo.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="ownerInfo"
                            value={props.UserP.ownerInfo} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.ownerInfo.ErrorMsg}</div>
                            <small id="emailHelp" className="form-text text-muted">This is the generator owners' information</small></div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-header"> Vintage </div>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Online Date:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.online_date.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="online_date"
                            value={props.UserP.online_date} onChange={props.handleChangeA}
                        /><div class="invalid-feedback">{props.ValidationP.online_date.ErrorMsg}</div>
                            <small id="online_date" className="form-text text-muted">(MM/YYYY)</small></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Utility Interconnection Date:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.utility_interconn_date.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="utility_interconn_date"
                            value={props.UserP.utility_interconn_date} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.utility_interconn_date.ErrorMsg}</div>
                            <small id="utility_interconn_date" className="form-text text-muted">(MM/DD/YYYY)</small></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Utility:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.utility_name.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="utility_name"
                            value={props.UserP.utility_name} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.utility_name.ErrorMsg}</div>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Balancing Authority:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.balancing_authority.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="balancing_authority"
                            value={props.UserP.balancing_authority} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.balancing_authority.ErrorMsg}</div></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >NERC Region Type:* </label>
                        <div className="col-sm-8"><input type="text" className={"form-control" + (props.ValidationP.region_name.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="loginametxt" name="region_name"
                            value={props.UserP.region_name} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.region_name.ErrorMsg}</div></div>
                    </div>


                </div>
            </div>

            <div className="card">
                <div className="card-header">System Characteristics</div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-sm-2">  <label className="col-form-label" > </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Module Quantity </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Module Size </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Tilt (00.00-90.00) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Orientation (00.00-359.00) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" > </label></div>
                    </div>

                    <div className="row">

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">  <input type="text" id="cntxt" name="tmp_array_value_1" className={"form-control" + (props.ValidationP.tmp_array_value_1.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF}
                            value={props.UserP.tmp_array_value_1} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_array_value_1.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" name="tmp_array_value_2" className={"form-control" + (props.ValidationP.tmp_array_value_2.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF}
                                value={props.UserP.tmp_array_value_2} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_array_value_2.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" id="cntxt" name="tmp_array_value_3" className={"form-control" + (props.ValidationP.tmp_array_value_3.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF}
                                value={props.UserP.tmp_array_value_3} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_array_value_3.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" id="cntxt" name="tmp_array_value_4" className={"form-control" + (props.ValidationP.tmp_array_value_4.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF}
                                value={props.UserP.tmp_array_value_4} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_array_value_4.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <button className="btn btn-primary" name="systemChar" onClick={props.handleSubmitA}>Add Item</button>
                        </div>
                    </div>



                    {prop_array.systemChar.map((v, index) => {
                        return (


                            <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-2">
                                    {v.tmp_array_value_1}
                                </div>
                                <div className="col-sm-2">
                                    {v.tmp_array_value_2}
                                </div>
                                <div className="col-sm-2 ">
                                    {v.tmp_array_value_3}
                                </div>
                                <div className="col-sm-2 ">
                                    {v.tmp_array_value_4}
                                </div>

                                <div className="col-sm-2">
                                    <button className="btn btn-primary" name="systemChar"
                                        value={index} onClick={props.handleDeleteItem}>Delete Item</button>
                                </div>
                            </div>



                        )
                    })
                    }
                </div>
            </div>


            <div className="card">
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" > Generation Entry:* </label>
                    <div className="col-sm-8">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="generation_entry_checkbox"
                                value="actualGeneration" onChange={props.handleChangeA}
                                id="defaultCheck1" />
                            <label className="form-check-label"  >Actual Generation (kWh)</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1" name="generation_entry_checkbox"
                                value="meterReading" onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div>
                            <label className="form-check-label" > Meter Reading (kWh) </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1" name="generation_entry_checkbox"
                                value="productionEstimate" onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.email.ErrorMsg}</div>
                            <label className="form-check-label" > Production Estimate (kWh) </label>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card">
                <div className="card-header"> Meter Information:
                    <small> "Atleast one (1) meter must be defined"</small>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-sm-2">  <label className="col-form-label" > </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Meter Name </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Initial Meter Read (kWh) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Initial Meter Read Date (MM/DD/YYYY) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Maximum Meter Read (kWh) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" > </label></div>
                    </div>

                    <div className="row">

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">  <input type="text" className={"form-control" + (props.ValidationP.tmp_meterInfo_1.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} name="tmp_meterInfo_1"
                            value={props.UserP.tmp_meterInfo_1} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_meterInfo_1.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" className={"form-control" + (props.ValidationP.tmp_meterInfo_2.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="cntxt" name="tmp_meterInfo_2"
                                value={props.UserP.tmp_meterInfo_2} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_meterInfo_2.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" className={"form-control" + (props.ValidationP.tmp_meterInfo_3.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="cntxt" name="tmp_meterInfo_3"
                                value={props.UserP.tmp_meterInfo_3} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_meterInfo_3.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <input type="text" className={"form-control" + (props.ValidationP.tmp_meterInfo_4.ErrorMsg ? " is-invalid" : "")} onBlur={props.ValidationF} id="cntxt" name="tmp_meterInfo_4"
                                value={props.UserP.tmp_meterInfo_4} onChange={props.handleChangeA} /><div class="invalid-feedback">{props.ValidationP.tmp_meterInfo_4.ErrorMsg}</div>
                        </div>

                        <div className="col-sm-2">
                            <button className="btn btn-primary" name="meterInfo" onClick={props.handleSubmitA}>Add Item</button>
                        </div>
                    </div>



                    {prop_array.meterInfo.map((v, index) => {
                        return (

                            <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-2">
                                    {v.tmp_meterInfo_1}
                                </div>
                                <div className="col-sm-2">
                                    {v.tmp_meterInfo_2}
                                </div>
                                <div className="col-sm-2 ">
                                    {v.tmp_meterInfo_3}
                                </div>
                                <div className="col-sm-2 ">
                                    {v.tmp_meterInfo_4}
                                </div>

                                <div className="col-sm-2">
                                    <button className="btn btn-primary" name="meterInfo"
                                        value={index} onClick={props.handleDeleteItem}>Delete Item</button>
                                </div>
                            </div>



                        )
                    })
                    }


                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >
                            Third Party Reporter
                            <small> (Company you have an agreement with to report generation on your behalf) </small>
                        </label>

                        <div className="dropdown col-sm-8">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Company </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" name="thirdPartyReporter"
                                value={props.UserP.thirdPartyReporter} onChange={props.handleChangeA}>
                                <label className="dropdown-item" >Company 1</label>
                                <label className="dropdown-item" >Company 2</label>
                                <label className="dropdown-item" >Company 3</label>
                            </div>
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
                                <input className="form-check-input" type="checkbox" name="docu_upload_checkbox"
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

export default SolarGenFormComponent;
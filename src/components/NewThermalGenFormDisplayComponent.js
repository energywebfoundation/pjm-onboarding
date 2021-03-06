import React from 'react';

const NewThermalGenFormDisplayComponent = (props) => {
    var retrievedObject = localStorage.getItem('NewThermalGenFormData');
    let parsed_obj = JSON.parse(retrievedObject);
    console.log('retrievedObject: ', parsed_obj.email);

    return (
        <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>
            <div className="card">
                <div className="card-header">New Thermal Generator Application </div>
                <div className="card-body">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  >Email address</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.email}</label>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"  > Address</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.address}</label>
                        </div>
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
                        <div className="col-sm-8"> <label>{parsed_obj.system_name_1}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"   >System Name 2:* </label>
                        <div className="col-sm-8"><label>{parsed_obj.system_name_2}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >System Size (kW):* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.system_size}</label></div>
                    </div>
                </div>

            </div>



            <div className="card">
                <div className="card-header">Street Address</div>
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label">Street 1</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.street1}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Street 2</label>
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
                        <label className="col-sm-4 col-form-label" >Are you the physical owner of the generating system located at this address? *</label>
                        <div className="col-sm-8">
                            <div className="form-check form-check-inline">
                                <label>{parsed_obj.owner_checkbox}</label>
                            </div>

                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Owner Information</label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.ownerInfo}</label>
                            <small id="emailHelp" className="form-text text-muted">This is the generator owners' information</small></div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-header"> Vintage </div>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Vintage(month and year of commercial operation):* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.online_date}</label>
                            <small id="online_date" className="form-text text-muted">(MM/YYYY)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Utility:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.utility_name}</label>
                            <small id="utility_interconn_date" className="form-text text-muted">(MM/DD/YYYY)</small>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Balancing Authority:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.balancing_authority}</label>
                        </div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >NERC Region Type:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.region_name}</label>
                        </div>
                    </div>


                </div>
            </div>

            <div className="card">
                <div className="card-header">System Characteristics</div>
                <div className="card-body">

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Number of Modules: </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.numberOfModules}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Module Manufacturer: </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.moduleManufacturer}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >System Model: </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.sys_model}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Annual Estimated Output:*  </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.annualEstOutput}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Meter Manufacturer:  </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.meterManufacturer}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Meter Make:  </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.meterMake}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Meter Model:  </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.meterModel}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Meter OIML Certified?  </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.meterCertified}</label>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card">
                <div className="card-body">
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" > Generation Entry:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.generation_entry_checkbox}</label>
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
                        <div className="col-sm-2">  <label className="col-form-label" >Initial Meter Read (Btu) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Initial Meter Read Date (MM/DD/YYYY) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" >Maximum Meter Read (Btu)(optional) </label></div>
                        <div className="col-sm-2">  <label className="col-form-label" > </label></div>
                    </div>

                    <div className="row">

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">
                        </div>

                        <div className="col-sm-2">
                        </div>
                    </div>



                    {parsed_obj.meterInfo.map((v, index) => {
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


                                <div className="col-sm-2">

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
                        <label className="col-sm-4 col-form-label" > Documents:* </label>
                        <div className="col-sm-8">
                            <div className="form-check form-check-inline">
                                <label>{parsed_obj.docu_upload_checkbox}</label>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewThermalGenFormDisplayComponent;
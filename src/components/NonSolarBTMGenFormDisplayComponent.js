import React from 'react';

const NonSolarBTMGenFormDisplayComponent = (props) => {
    var retrievedObject = localStorage.getItem('NonSolarBTMGenFormData');
    let parsed_obj = JSON.parse(retrievedObject);
    console.log('retrievedObject: ', parsed_obj.email);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Non Solar BTM Generator Application </div>
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
                        <label className="col-sm-4 col-form-label"  >Plant Name:* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.plant_name}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label"   >Unit Name:* </label>
                        <div className="col-sm-8"><label>{parsed_obj.unit_name}</label></div>
                    </div>

                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Name Plate Capacity:* </label>
                        <div className="col-sm-8"> <label>{parsed_obj.name_plate_capacity}</label></div>
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
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Repowering/Derate Date:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.derate_date}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >Capacity Addition/Subtraction:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.capAddition}</label>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label className="col-sm-4 col-form-label" >FERC Hydroelectric License Relicensing Date:* </label>
                        <div className="col-sm-8">
                            <label>{parsed_obj.relicenseDate}</label>
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
                        <label>{parsed_obj.cemReporting}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >ORIS PL:* </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.orisPL}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Emissions Unit ID(s):* </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.emissionUnitID}</label>
                    </div>
                </div>
                <div className="form-group  row">
                    <label className="col-sm-4 col-form-label" >Peer Unit Name and Address (if not reporting actual generator emissions):*   </label>
                    <div className="col-sm-8">
                        <label>{parsed_obj.peerUnitName}</label>
                    </div>
                </div>
               

                </div>
            </div>


            <div className="card">
                <div className="card-body">
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
                            <label>{parsed_obj.docu_upload_checkbox}</label>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NonSolarBTMGenFormDisplayComponent;
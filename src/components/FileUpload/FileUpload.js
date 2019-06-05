import React, {Component} from 'react';


class FileUpload extends Component{

    //TODO: MUultiple file upload
    onChangeFileName(){
        const formData =  new FormData();
        formData.append('file',document.getElementById('file').files[0]);
        this.props.onFileChange(formData);
    }

    render(){
        return (
            <div className="container col-xl-5 col-lg-8 col-md-8 col-sm-12" style={{ marginTop: 30 }}>
                <div className="card">
                    <div className="card-header">File Upload</div>
                    <div className="card-body">

                        <div>
                            <div classNameName="input-group">
                                <div className="custom-file">
                                    <form>
                                        <input type="file" className="custom-file-input" 
                                            id={this.props.id} 
                                            onChange={()=> this.onChangeFileName()} 
                                            name={this.props.id} />

                                        <label className="custom-file-label" for={this.props.id} >Choose file</label>
                                    </form>
                                </div>
                                
                                </div>

                        </div>

                    </div>
                </div>
            </div>
        )

    }



}

export {FileUpload}
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {uploadFile} from '../../store/actions/Actions'
import {FileUpload} from '../../components/FileUpload/FileUpload'
import {SimpleTable} from '../../components/Table/Table'

class FileSettings extends Component{



    render(){
        return (
            <div>
                <FileUpload  id={'file'} onUploadFile={this.onUpload} onFileChange={(formData)=>this.props.uploadFile(formData)}/>
                <br />
                <SimpleTable  
                    headers={['File', 'Status', 'Size', 'Date']} 
                    rows={this.props.files} 
                    keys={['filename', 'status', 'size' , 'date']}
                    rowIdentifier={'filename'}
                    onClickRow={(key)=>this.download(key)}
                    />
            </div>             
           )
    }

    download(key){
        //TODO: change it to a real file server -- It's just a PoC
        window.open(`http://localhost:8090/api/download/public/${key}`, '_blank')
    }


}

function mapStateToProps(state){
    return {
        files: state.files
    }
}

function mapDispatchToProps(dispatch){
    return {
        uploadFile: (formData) => dispatch(uploadFile(formData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FileSettings)


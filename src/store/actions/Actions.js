import {USERS,DELETE_USER, REG_USER, UPLOAD_FILE} from './ActionsTypes';
import {isMocked} from '../../utils/Utils';
import axios from 'axios'

//TODO: Change it to a real file server API
const URL = 'http://localhost:8090/api'

//TODO: Define a pattern of names in all actions 

const ADD_USER = () => {
    const id = new Date().getMilliseconds();
    return {
        type: USERS,
        payload: {id:id, name: `user ${id}`}
    }
}

const register_user = (_name, _address) => {
    return {
        type: REG_USER,
        payload: {name:_name, address: _address}
    }
}

const deleteUserByIndex = (index) => {
     return {
        type: DELETE_USER,
        payload: {userIndex: index}    
    }
}

const _uploadFileSuccess =  (response) =>{
    response['date'] = new Date().toLocaleDateString();
    response['status'] = 'OK';
   return {
       type:UPLOAD_FILE,
       payload: response
   }
}

const _MOCK_uploadFileSuccess = () => {
    //TODO: CHange it to a real mock of file server provider
    return  {
        type:UPLOAD_FILE,
        payload: {
            "path": "QmPaPba7kAUK6R7TQTwY5jDVbwTCLE64UgLgxCNG9xMLht",
            "hash": "QmPaPba7kAUK6R7TQTwY5jDVbwTCLE64UgLgxCNG9xMLht",
            "size": 145829,
            "status": "OK",
            "date": new Date().toLocaleDateString()
        }
    }
}

const uploadFile =  (formData)  => {

    if(isMocked()){
        console.log(isMocked);
        return _MOCK_uploadFileSuccess();

    }
       
    const request = {
                        url : `${URL}/upload/public`,
                        method : 'post',
                        data : formData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }},
                        processData: false,  // tell jQuery not to process the data
                        contentType: false,  // tell jQuery not to set contentType
                       
                    };

    return (dispatch) =>{
      return axios(request)
                .then(response=> 
                        dispatch( _uploadFileSuccess(response.data) ) )
    }
   
}

export {ADD_USER, register_user, deleteUserByIndex , uploadFile}


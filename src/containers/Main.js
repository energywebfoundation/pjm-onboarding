import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/Actions'

class Main extends Component{

    render(){
        return(
            <div className="main">
                <div></div>
                Hello!! you have {this.props.users.length} users

                <button onClick={()=> this.onAddUser()}>Add user</button>  

                <ul>
                    { this.props.users.map( (u,k)=> 
                        <li  className='li-teste' key={u.id} onClick={()=>this.props.onListUsersDelete(k)}>{u.name}</li> ) }
                </ul>  
            </div>
        )
    }

    onAddUser(){
        this.props.onListUsers();
    }

}

const mapStateToProps = (state) =>{
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListUsers: () => dispatch( actions.ADD_USER()) ,
        onListUsersDelete: (index) => dispatch( actions.deleteUserByIndex(index))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
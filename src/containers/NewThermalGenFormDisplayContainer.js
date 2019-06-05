import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewThermalGenFormDisplayComponent from '../components/NewThermalGenFormDisplayComponent'


class NewThermalGenFormDisplayContainer extends Component {
    

    render() {
        return (
            <NewThermalGenFormDisplayComponent >
            </NewThermalGenFormDisplayComponent>
        )
    }
}

export default connect()(NewThermalGenFormDisplayContainer);



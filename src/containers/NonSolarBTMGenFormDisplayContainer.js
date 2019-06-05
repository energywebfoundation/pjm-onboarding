import React, { Component } from 'react';
import { connect } from 'react-redux';
import NonSolarBTMGenFormDisplayComponent from '../components/NonSolarBTMGenFormDisplayComponent'


class NonSolarBTMGenFormDisplayContainer extends Component {
    

    render() {
        return (
            <NonSolarBTMGenFormDisplayComponent >
            </NonSolarBTMGenFormDisplayComponent>
        )
    }
}

export default connect()(NonSolarBTMGenFormDisplayContainer);



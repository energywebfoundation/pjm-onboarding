import React, { Component } from 'react';
import { connect } from 'react-redux';
import SolarGenFormDisplayComponent from '../components/SolarGenFormDisplayComponent'


class SolarGenFormDisplayContainer extends Component {
    

    render() {
        return (
            <SolarGenFormDisplayComponent >
            </SolarGenFormDisplayComponent>
        )
    }
}

export default connect()(SolarGenFormDisplayContainer);



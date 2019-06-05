import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let isLoggedIn;
let isUserAndIsNotLogged;
let isNotUser;
let isAccountHolder;
let isAdmin;
let isUser;

export class NavBar extends Component {

    componentWillMount() {
        isLoggedIn = this.props.role.loggedIn;
        isNotUser = !this.props.role.isUser;
        isUser = this.props.role.isUser && this.props.role.loggedIn && !this.props.role.isAdmin;
        isUserAndIsNotLogged = this.props.role.isUser && !this.props.role.loggedIn && !this.props.role.isAdmin;
        isAccountHolder = this.props.role.isAccountHolder && this.props.role.loggedIn && !this.props.role.isAdmin;
        isAdmin = this.props.role.isAdmin;
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navBarId">
                    <div style={{ color: '#FFF' }}>
                        GATS
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            {/* <li>
                                <NavLink to="/RegUserContainer" className="nav-link" href="#">Register</NavLink>
                            </li> */}
                            {isAdmin &&
                                <li className="nav-item">
                                    <NavLink to="/RegUserDisplayContainer" className="nav-link" href="#">Show Information</NavLink>
                                </li>
                            }
                            {isAccountHolder &&
                                <li className="nav-item">
                                    <NavLink to="/SolarGenFormContainer" className="nav-link" href="#"> Solar Photovoltaic</NavLink>
                                </li>
                            }
                            {isAccountHolder &&
                                <li className="nav-item">
                                    <NavLink to="/SolarGenFormDisplayContainer" className="nav-link" href="#">Show Solar Photovoltaic</NavLink>
                                </li>
                            }
                            {isUser &&
                                <li className="nav-item">
                                    <NavLink to="/FileSettings" className="nav-link" href="#">FileSettings</NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}



export default NavBar
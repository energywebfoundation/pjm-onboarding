import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import SolarGenFormContainer from './containers/SolarGenFormContainer'
import NewThermalGenFormContainer from './containers/NewThermalGenFormContainer'
import NonSolarBTMGenFormContainer from './containers/NonSolarBTMGenFormContainer'
import RegUserContainer from './containers/RegUserContainer'
import SolarGenFormDisplayContainer from './containers/SolarGenFormDisplayContainer'
import NewThermalGenFormDisplayContainer from './containers/NewThermalGenFormDisplayContainer'
import NonSolarBTMGenFormDisplayContainer from './containers/NonSolarBTMGenFormDisplayContainer'
import RegUserDisplayContainer from './containers/RegUserDisplayContainer'
import AdminRegUserDisplayContainer from './containers/AdminRegUserDisplayContainer'
import UserRegUserDisplayContainer from './containers/UserRegUserDisplayContainer'
import FileSettings from './containers/FileSettings/FileSettings'
import { NavBar } from './components/navigation/NavBar';
import { connect } from 'react-redux';
import { LoginContainer } from './containers/LoginContainer';

let isLoggedIn;
let isUserAndIsNotLogged;
let isNotUser;
let isAccountHolder;
let isAdmin;
let isUser;

class App extends Component {

  componentWillMount() {
    isLoggedIn = this.props.loggedIn;
    isNotUser = !this.props.isUser;
    isUser = this.props.isUser && this.props.loggedIn && !this.props.isAdmin;
    isUserAndIsNotLogged = this.props.isUser && !this.props.loggedIn && !this.props.isAdmin;
    isAccountHolder = this.props.isAccountHolder && this.props.loggedIn && !this.props.isAdmin;
    isAdmin = this.props.isAdmin;
  }

  render() {
    return (
      <div>
        {this.props.loggedIn &&
          <NavBar role={this.props} />
        }
        <Switch>
          {isUserAndIsNotLogged &&
            <Route path="/" component={LoginContainer} />
          }
          {isNotUser &&
            <Route path="/" component={RegUserContainer} />
          }
          {isUser &&
            <Route path="/" exact component={UserRegUserDisplayContainer} />
          }
          {isAdmin &&
            <Route path="/" component={RegUserDisplayContainer} />
          }
          {isAccountHolder &&
            <Route path="/SolarGenFormContainer" exact component={SolarGenFormContainer} />
          }
          {isAccountHolder &&
            <Route path="/NewThermalGenFormContainer" exact component={NewThermalGenFormContainer} />
          }
          {isAccountHolder &&
            <Route path="/NonSolarBTMGenFormContainer" exact component={NonSolarBTMGenFormContainer} />
          }
          {isAccountHolder &&
            <Route path="/SolarGenFormDisplayContainer" exact component={SolarGenFormDisplayContainer} />
          }
          {isAccountHolder &&
            <Route path="/NewThermalGenFormDisplayContainer" exact component={NewThermalGenFormDisplayContainer} />
          }
          {isAccountHolder &&
            <Route path="/NonSolarBTMGenFormDisplayContainer" exact component={NonSolarBTMGenFormDisplayContainer} />
          }
          {isUser &&
            <Route path="/FileSettings" component={FileSettings} />
          }
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    isUser: state.isUser,
    isAdmin: state.isAdmin,
    isAccountHolder: state.isAccountHolder
  }
}

export default withRouter(connect(mapStateToProps)(App));
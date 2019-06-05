import React from 'react';

export class LoginContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            passwordValid: true
        };
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = (e) => {
        this.setState({
            showLoadingModal: true
        });
        this.login(e);
    };

    login = async (e) => {
        //TODO: Implement login logical attached with the backend
        e.preventDefault();
        console.log('here');
        sessionStorage.setItem('user', '123');
        //TODO: Call next page withou reloading through window.location
        window.location.reload();
    };

    render() {
        return (
            <div>
                <div className="container col-xl-3 col-lg-4 col-md-5 col-sm-10" style={{ marginTop: 150 }}>
                    <form onSubmit={this.handleSubmit} method='post'>
                        <div className="card" style={{ backgroundColor: '#343a40', padding: 20, marginTop: 5 }}>
                            <h4 className="d-flex justify-content-center" style={{ color: '#FFF', marginTop: 20 }}>
                                GATS &nbsp;|&nbsp; Login
                            </h4>
                        </div>
                        <div className="card" style={{ padding: 20, marginTop: -1 }}>
                            <div className="form-row d-flex justify-content-center">
                                <div className="form-group col-md-10 col-sm-12">
                                    <label htmlFor="password">Password</label>
                                    <input value={this.state.password} name="password" type="password" onChange={this.handleChange} className="form-control" id="password" placeholder='type your password' />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group d-flex justify-content-center col-md-12 col-sm-12">
                                    <button className="btn btn-primary col-md-10 col-sm-12" type="submit" id="btnLogin" disabled={this.state.password.length === 0}>Log in</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        );
    }
}

export default LoginContainer

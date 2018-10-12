import React from 'react';
import API from "../../utils/API"

class Auth extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    handleFormSubmit = event => {
        event.preventDefault();

        switch (this.props.location.pathname) {
            case "/login": {
                API.login(this.state)
                    .then(res => {
                        console.log(res.data)
                        this.props.handleLogIn(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                break;
            }
            case "/signup": {
                API.signup(this.state)
                    .then(res => {
                        console.log(res.data)
                        this.props.handleSignUp(res.data);

                    })
                    .catch(err => {
                        console.log(err)

                    })
                break;
            }

        }



    };

    render() {
        return (
                <div className="column is-10 is-offset-1">
                <div className="field is-grouped-centered has-text-left">
                <label className="label">Username</label>
                <div className="control">
                <input type="text" name="username" className="input is-link" value={this.state.username} onChange={this.handleInputChange} />
                </div>
                <br/>
                <label className="label">Password</label>
                <div className="control">
                <input type="password" name="password" className="input is-link" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <br/>
                <div className="control">
                <button className="button is-link" type="submit" onClick={this.handleFormSubmit}>Submit</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Auth;
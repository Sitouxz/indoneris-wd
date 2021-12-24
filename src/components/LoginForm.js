import { Link, Navigate } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            redirect: false,
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            console.log("Is Authenticated");
            // this.props.history.push("/classes"); // push user to dashboard when they login
            this.setState({
                redirect: true,
            });
        }
        if (nextProps.errors) {
            console.log("Not Authenticated");
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    onSubmit(event) {
        
        event.preventDefault();
        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2,
        };
        axios
            .post("http://localhost:4000/app/signin", registered)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    errors:res.data,
                    redirect: true
                });
            });
        
        
        
        
    }
    render() {
        let redirect = this.state.redirect;
        if (redirect) {
            console.log('asdasda')
            return <Navigate to="/classes" />;
        }else{
            console.log(this.state.redirect)
        }
        return (
            <div className="text-primary">
                <h1 className="mb-5 fs-3">Sign In</h1>
                <form
                    id="login-form"
                    className="needs-validation"
                    onSubmit={this.onSubmit}
                    noValidate>
                    {/* //email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            required
                        />
                        <div className="error" id="password">
                            {this.state.errors.emailnotfound}
                        </div>
                    </div>
                    {/* password */}
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="*********"
                            onChange={this.changePassword}
                            value={this.state.password}
                            required
                        />
                        <div className="error" id="password">
                            {this.state.errors.passwordIncorrect}
                        </div>
                    </div>
                    {/* <Link to="/classes"> */}
                    <button type="submit" className="btn3d btn-blue w-100 mb-3">
                        Submit
                    </button>
                    {/* </Link> */}
                    <label className="text-muted">Don't have an account?</label>
                    <Link
                        className="text-primary text-decoration-none ms-1"
                        to="/register">
                        Sign Up
                    </Link>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(LoginForm);

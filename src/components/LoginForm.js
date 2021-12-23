import { Link, Navigate } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            redirect: false
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        const login = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post("http://localhost:4000/app/signin", login)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    errors:res.data,
                    redirect: true
                });
            });
        console.log("userEnter");
        /*this.setState({
            email: "",
            password: "",
        });*/
    }
    render() {

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
                        <div className="error" id="password">{this.state.errors.emailnotfound}</div>
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
                        <div className="error" id="password">{this.state.errors.passwordIncorrect}</div>
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

export default LoginForm;

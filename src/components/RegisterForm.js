import { Link, Navigate } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
// import classnames from "classnames";

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
            errors: {},
            redirect: false,
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePassword2 = this.changePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeFirstName(event) {
        this.setState({
            firstName: event.target.value,
        });
    }
    changeLastName(event) {
        this.setState({
            lastName: event.target.value,
        });
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
    changePhone(event) {
        this.setState({
            phone: event.target.value,
        });
    }
    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }
    changePassword2(event) {
        this.setState({
            password2: event.target.value,
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
            .post(
                "https://young-wildwood-72286.herokuapp.com/app/signup",
                registered
            )
            .then((res) => {
                console.log(res);
                if (res.data.logged) {
                    this.setState({
                        redirect: true,
                    });
                }
                this.setState({
                    errors: res.data,
                });
            });
        console.log(this.state.errors);
        //console.log(this.state.errors)
        /*this.setState({
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            password:''
        })*/
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Navigate to="/classes" />;
        }

        return (
            <div className="text-primary">
                <h1 className="mb-5 fs-3">Sign Up</h1>
                <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="John"
                                onChange={this.changeFirstName}
                                value={this.state.firstName}
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                First name cannot be empty
                            </div>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Doe"
                                onChange={this.changeLastName}
                                value={this.state.lastName}
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Last name cannot be empty
                            </div>
                        </div>
                    </div>
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="081234567890"
                            onChange={this.changePhone}
                            value={this.state.phone}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="password"
                            placeholder="*********"
                            onChange={this.changePassword}
                            value={this.state.password}
                            required
                        />
                        {/*<div 
                    className={classnames("valid-feedback", {"invalid-feedback": errors.password})}>{errors.password}
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                        Password cannot be empty
                    </div> */}
                        <label htmlFor="password2" className="form-label">
                            Re-type Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            placeholder="*********"
                            onChange={this.changePassword2}
                            value={this.state.password2}
                            required
                        />

                        {/* <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                        Password cannot be empty
                    </div> */}
                    </div>
                    <div className="error text-danger" id="error">
                        {this.state.errors.password}
                    </div>
                    <div className="error text-danger" id="error">
                        {this.state.errors.password2}
                    </div>
                    <div className="error text-danger" id="error">
                        {this.state.errors.email}
                        {this.state.errors.alreadyRegist}
                    </div>
                    <div className="error text-danger" id="error">
                        {this.state.errors.phone}
                    </div>
                    {/* <Link to="/classes"> */}
                    <button
                        type="submit"
                        className="btn3d btn-blue w-100 mb-3"
                        value="Submit">
                        Submit
                    </button>
                    {/* </Link> */}
                    <label className="text-muted">
                        Already have an account?
                    </label>
                    <Link
                        to="/login"
                        className="text-primary text-decoration-none ms-1">
                        Sign In
                    </Link>
                </form>
            </div>
        );
    }
}

export default RegisterForm;

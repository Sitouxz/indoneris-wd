import { Link } from "react-router-dom";
import React, {Component} from "react";

class RegisterForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            password:''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeFirstName(event){
       this.setState({
            firstName:event.target.value
       })
    }
    changeLastName(event){
       this.setState({
            lastName:event.target.value
       })
    }
    changeEmail(event){
       this.setState({
            email:event.target.value
       })
    }
    changePhone(event){
       this.setState({
            phone:event.target.value
       })
    }
    changePassword(event){
       this.setState({
            password:event.target.value
       })
    }

    render(){
        return (
        <div className="text-primary">
            <h1 className="mb-5 fs-3">Sign Up</h1>
            <form action="#" className="needs-validation" noValidate>
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
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                        Email cannot be empty
                    </div>
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
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                        Password cannot be empty
                    </div>
                </div>
                <Link to="/classes">
                    <button type="submit" className="btn3d btn-blue w-100 mb-3" value="Submit">
                        Submit
                    </button>
                </Link>
                <label className="text-muted">Already have an account?</label>
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
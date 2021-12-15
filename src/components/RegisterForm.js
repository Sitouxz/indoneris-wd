import { Link } from "react-router-dom";

export default function RegisterForm() {
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
                            type="email"
                            className="form-control"
                            id="lastName"
                            placeholder="Doe"
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
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                        Password cannot be empty
                    </div>
                </div>
                <button type="submit" className="btn3d btn-blue w-100 mb-3">
                    Submit
                </button>
                <label className="text-muted">Already have an account?</label>
                <Link to="/login" className="text-primary text-decoration-none ms-1">
                    Sign In
                </Link>
            </form>
        </div>
    );
}

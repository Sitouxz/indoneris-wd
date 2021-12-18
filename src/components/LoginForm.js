import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="text-primary">
            <h1 className="mb-5 fs-3">Sign In</h1>
            <form action="/" className="needs-validation" noValidate>
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
                <Link to="/classes">
                    <button type="submit" className="btn3d btn-blue w-100 mb-3">
                        Submit
                    </button>
                </Link>
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

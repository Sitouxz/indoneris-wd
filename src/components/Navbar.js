import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="container navbar py-3 d-flex justify-content-between">
            <h1 className="fw-bold text-light">Logo</h1>
            <div>
                <Link to="/login">
                    <button className="btn text-light">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn3d text-primary">Register</button>
                </Link>
            </div>
        </header>
    );
}

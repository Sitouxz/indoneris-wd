import { Link } from "react-router-dom";
import logo from "../assets/images/header-logo-white.svg";

export default function Header() {
    return (
        <header className="container navbar py-3 d-flex justify-content-between">
            <img src={logo} height="48px" alt="" />
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

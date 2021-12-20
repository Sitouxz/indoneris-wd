import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="mb-5">
            <nav
                className="navbar navbar-expand-md navbar-light shadow-sm"
                aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/classes">
                        Logo
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/classes">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/profile">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        <Link
                            to="/profile"
                            className="text-decoration-none text-black">
                            <div className="d-flex align-items-center">
                                <span className="order-2 order-md-1">
                                    Ezny Carl
                                </span>
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
                                    width="32px"
                                    className="
                                ms-0 ms-md-3
                                me-3 me-md-0
                                rounded-circle
                                bg-dark
                                order-1 order-md-2
                                "
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default function Header() {
    return (
        <header className="mb-5">
            <nav
                className="navbar navbar-expand-md navbar-light shadow-sm"
                aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="...">
                        Logo
                    </a>
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
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="...">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="...">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="...">
                                    Disabled
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="..."
                                    id="dropdown04"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdown04">
                                    <li>
                                        <a className="dropdown-item" href="...">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="...">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="...">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
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
                    </div>
                </div>
            </nav>
        </header>
    );
}

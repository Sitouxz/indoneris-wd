export default function ProfileNav() {
    return (
        <section className="container mt-5">
            <div className="d-flex justify-content-between border-bottom">
                <button className="btn fw-bold">
                    Class <span className="fw-normal">26</span>
                </button>
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Recent Class
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a className="dropdown-item" href="...">
                                Newest Class
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="...">
                                Oldest Class
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

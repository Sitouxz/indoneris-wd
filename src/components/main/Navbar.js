import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <section
            className="
                container
                d-flex
                justify-content-center justify-content-md-between
                align-items-center
                flex-wrap
                mb-5
            ">
            <div className="d-flex flex-wrap gap-3 mb-3 mb-lg-0">
                <button
                    className="btn3d btn-yellow text-black "
                    id="button"
                    data-date-format="yyyy-mm-dd"
                    data-date="2012-02-20">
                    <i className="bi bi-calendar me-2"></i>
                    <span id="date">12th June 2022</span>
                </button>
                <button className="btn3d btn-blue ">
                    <i className="bi bi-journal-bookmark-fill me-1"></i>1
                </button>
                <Link to="/assignment">
                    <button className="btn3d btn-red">
                        View all assignment
                    </button>
                </Link>
            </div>
            <div>
                <form
                    action="#"
                    className="d-flex justify-content-center align-items-center">
                    <div className="input-group flex-nowrap me-3">
                        <span
                            className="input-group-text bg-white border-end-0"
                            id="addon-wrapping">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Math..."
                            aria-label="Search"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

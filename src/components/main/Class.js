import { Link } from "react-router-dom";
import dummyImg from "../../assets/images/dummy-profile.jpg";

export default function Class() {
    return (
        <Link to="/class" className="text-decoration-none text-black">
            <div
                className="
                    card
                    bg-transparent
                    d-flex
                    justify-content-center
                    align-items-center
                    border-0
                    text-center
                "
                style={{ width: "18rem" }}>
                <img
                    src={dummyImg}
                    className="card-img-top img-mask rounded-15-top"
                    alt="..."
                />
                <div className="card-body bg-light-blue rounded-15-bottom">
                    <p className="text-light id">#1</p>
                    <h5 className="card-title fw-bold">English General</h5>
                    <p className="m-0 mb-2">Teacher: Mr. Jhon Doe</p>
                    <p>
                        Learning English leads us to have friends from another
                        countries
                    </p>
                    <div className="d-flex justify-content-between mb-2">
                        <button className="btn3d btn-blue">
                            <i className="bi bi-journal-bookmark-fill me-2"></i>
                            1
                        </button>
                        <button className="btn3d btn-yellow text-black">
                            <i className="bi bi-calendar me-2"></i>
                            15 June 2022
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

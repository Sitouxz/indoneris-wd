import { Link } from "react-router-dom";

export default function Cta() {
    return (
        <div className="container text-center my-5 py-5">
            <div>
                <h1 className="fs-3 fw-bold">
                    Lorem ipsum dolor sit <br />
                    amet consectetur adispiscing elit.
                </h1>
            </div>
            <div>
                <Link to="/register">
                    <button className="btn3d">Get Started</button>
                </Link>
            </div>
        </div>
    );
}

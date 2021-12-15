import { Link } from "react-router-dom";
import image1 from "../assets/images/image1.svg";

export default function Header() {
    return (
        <section className="mb-5">
            <div
                className="
                    container
                    d-flex
                    flex-column-reverse flex-lg-row
                    justify-content-between
                    align-items-center
                ">
                <div className="text-center text-lg-start">
                    <h1 className="fw-bold text-light fs-7">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <Link to={"/register"}>
                        <button className="btn3d text-primary">
                            Get Started
                        </button>
                    </Link>
                </div>

                <div>
                    <img
                        src={image1}
                        className="img-fluid float-end p-5 p-lg-0"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

import { Link } from "react-router-dom";
import image1 from "../assets/images/image2.svg";
import image2 from "../assets/images/image3.svg";

const oneTwo = " order-2";
const twoOne = " order-2 order-lg-1";

export default function Feature(props) {
    return (
        <div className="row align-items-center py-5 my-5 w-100">
            <div
                className={`col-12 col-md-6 text-center ${
                    props.feature === "feature2" ? oneTwo : twoOne
                } ${
                    props.feature === "feature2"
                        ? "text-lg-end"
                        : "text-lg-start"
                }`}>
                <img src={props.image === "image2" ? image2 : image1} alt="" />
            </div>
            <div
                className={`col-12 col-md-6 text-center text-lg-start ${
                    props.feature === "feature2" ? twoOne : oneTwo
                }`}>
                <h1 className="fw-bold">{props.title}</h1>
                <p className="fs-5">{props.desc}</p>
                <Link to="/register">
                    <button className="btn3d btn-yellow">Get Started</button>
                </Link>
            </div>
        </div>
    );
}

import image1 from "../assets/images/image2.svg";
import image2 from "../assets/images/image3.svg";

const oneTwo = " order-2";
const twoOne = " order-2 order-lg-1";

export default function Feature(props) {
    return (
        <div className="row align-items-center py-5 my-5">
            <div
                className={`col-12 col-md text-center ${
                    props.feature === "feature2" ? oneTwo : twoOne
                } ${
                    props.feature === "feature2"
                        ? "text-lg-end"
                        : "text-lg-start"
                }`}>
                <img src={props.image === "image2" ? image2 : image1} alt="" />
            </div>
            <div
                className={`col text-center text-lg-start ${
                    props.feature === "feature2" ? twoOne : oneTwo
                }`}>
                <h1 className="fw-bold">
                    Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p className="fs-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi quidem minus, laboriosam enim maiores asperiores
                    laudantium. Iure atque aperiam inventore doloribus eveniet
                    vel ratione numquam!
                </p>
                <button className="btn3d btn-yellow">Get Started</button>
            </div>
        </div>
    );
}

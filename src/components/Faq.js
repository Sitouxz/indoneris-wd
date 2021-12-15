import FaqItem from "./FaqItem";

export default function Faq() {
    return (
        <div className="container py-5">
            <div className="text-center py-5">
                <h1 className="text-white fw-bold">
                    Lorem ipsum dolor sit amet
                </h1>
                <p className="fs-5">
                    lorem ipsum dolor sit amet, consectetur adispiscing
                </p>
            </div>
            <img
                src="./images/image4.svg"
                className="img-bg img-fluid d-none d-lg-block"
                width="150px"
                alt=""
            />
            <div className="row justify-content-center">
                <FaqItem />
                <FaqItem />
                <FaqItem />
            </div>
        </div>
    );
}

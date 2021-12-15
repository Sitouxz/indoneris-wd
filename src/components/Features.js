import bg1 from "../assets/images/bg1.svg";
import Feature from "./Feature";

export default function Features() {
    return (
        <section>
            <div>
                <img src={bg1} className="w-100" alt="..." />
            </div>
            <div
                className="
                    bg-white
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                ">
                <div
                    className="container
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                        my-5
                        py-5">
                    <Feature feature="feature1" image="image1" />
                    <Feature feature="feature2" image="image2" />
                </div>
            </div>
        </section>
    );
}

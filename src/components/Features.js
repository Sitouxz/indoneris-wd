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
                    <Feature
                        feature="feature1"
                        image="image1"
                        title="Time efficiency"
                        desc="Quickly access the material and tasks given by the teacher"
                    />
                    <Feature
                        feature="feature2"
                        image="image2"
                        title="Learn from anywhere"
                        desc="Distance can not prevent us from studying, we can still learn anywhere easier and more fun"
                    />
                </div>
            </div>
        </section>
    );
}

import FaqItem from "./FaqItem";

export default function Faq() {
    return (
        <div className="container py-5">
            <div className="text-center py-5">
                <h1 className="text-white fw-bold">Why...</h1>
                <p className="fs-5">Learn and fun together</p>
            </div>
            <img
                src="./images/image4.svg"
                className="img-bg img-fluid d-none d-lg-block"
                width="150px"
                alt=""
            />
            <div className="row justify-content-center">
                <FaqItem
                    title="Interesting Feature"
                    desc="Steudents can more easily control the tasks given by the teacher and scores received, and can enhanced teacher and student communication and cooperation."
                />
                <FaqItem
                    title="Student Profile"
                    desc="Parents can easily control the development of their child's learning from student profile."
                />
                <FaqItem
                    title="Children Friendly"
                    desc="An attractive display, easy to use and leave children not bored to learn."
                />
            </div>
        </div>
    );
}

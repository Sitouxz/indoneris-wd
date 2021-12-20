import dummyImg from "../../assets/images/dummy-profile.jpg";
import bg9 from "../../assets/images/bg9.svg";

export default function ProfileData() {
    return (
        <section
            className="
                container
                d-flex
                flex-wrap flex-lg-nowrap
                justify-content-center
                gap-4
            ">
            <img
                src={bg9}
                width="450px"
                className="position-absolute profile-bg d-none d-xxl-block"
                alt=""
            />
            <div>
                <div className="position-relative">
                    <img
                        src={dummyImg}
                        className="rounded-15 img-mask"
                        width="300px"
                        height="300px"
                        alt=""
                    />
                    <button className="bg-transparent border-0 change-profile">
                        <i className="bi bi-three-dots text-light fs-4"></i>
                    </button>
                </div>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn3d btn-blue">
                        <i className="bi bi-person-plus-fill me-2"></i>Follow
                    </button>
                    <button className="btn3d btn-red">
                        <i className="bi bi-envelope-fill me-2"></i>Contact
                    </button>
                </div>
            </div>
            <div className="w-100">
                <h1 className="fw-bold text-center text-lg-start">Ezny Carl</h1>
                <ul className="row list-unstyled">
                    <li className="col-3">NIS</li>
                    <li className="col-6">: 1234567891213145</li>
                </ul>
                <ul className="row list-unstyled">
                    <li className="col-3">Grade</li>
                    <li className="col-6">: 4</li>
                </ul>
                <ul className="row list-unstyled">
                    <li className="col-3">Address</li>
                    <li className="col-6">: Jl. Pramuka, No. 32A</li>
                </ul>
                <ul className="row list-unstyled">
                    <li className="col-3">Place, Date of Birth</li>
                    <li className="col-6">: Manado, 16 April 2012</li>
                </ul>
                <ul className="row list-unstyled">
                    <li className="col-3">Age</li>
                    <li className="col-6">: 9 Years old</li>
                </ul>
                <ul className="row list-unstyled">
                    <li className="col-3">Hobby</li>
                    <li className="col-6">: Sports</li>
                </ul>
            </div>
        </section>
    );
}

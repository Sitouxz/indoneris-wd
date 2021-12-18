import bg7 from "../assets/images/bg7.svg";
import bg8 from "../assets/images/bg8.svg";
import dummyImg from "../assets/images/dummy-profile.jpg";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import Meeting from "../components/main/Meeting";
import Post from "../components/main/Post";

export default function Class() {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <div className="d-none d-sm-block">
                <img src={bg7} className="bg-right me-5 behind" alt="" />
                <img src={bg8} className="bg-left ms-5 behind" alt="" />
            </div>
            <section className="container">
                <div className="card mb-3 rounded-3">
                    <div className="row g-0 bg-primary rounded text-light">
                        <div className="col-md-2">
                            <div className="img-container">
                                <img
                                    src={dummyImg}
                                    className="custom-img rounded-start"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card-body">
                                <p className="text-50">
                                    #1 <span>16 June 2022</span>
                                </p>
                                <h5 className="card-title fw-bold m-0">
                                    Mathematics
                                </h5>
                                <p className="text-50 m-0">Ms. Liora Smith</p>
                                <p className="text-50 m-0">
                                    Count more, fun more.
                                </p>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                        <div className="col-3 flex-grow-1 px-2 meeting">
                            <div
                                className="
                                d-flex
                                justify-content-between
                                align-items-center
                            ">
                                <h1>Meetings</h1>
                                <a href="...">
                                    <i className="bi bi-plus-circle text-light fs-3"></i>
                                </a>
                            </div>
                            <Meeting order="1" />
                            <Meeting order="2" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-2 d-none d-lg-block">
                        <div
                            className="
                            bg-primary
                            mb-3
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            rounded-10
                            text-light
                            py-3
                        ">
                            <i className="bi bi-journal-bookmark-fill fs-7"></i>
                            <h4>Assignment</h4>
                        </div>
                        <div
                            className="
                            bg-danger
                            mb-3
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            rounded-10
                            text-light
                            p-3
                        ">
                            <h3>Score</h3>
                            <h1>65%</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

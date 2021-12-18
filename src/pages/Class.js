import bg7 from "../assets/images/bg7.svg";
import bg8 from "../assets/images/bg8.svg";
import dummyImg from "../assets/images/dummy-profile.jpg";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import Meeting from "../components/main/Meeting";
import Post from "../components/main/Post";

export default function Class() {
    return (
        <div class="d-flex flex-column h-100">
            <Header />
            <div class="d-none d-sm-block">
                <img src={bg7} class="bg-right me-5 behind" alt="" />
                <img src={bg8} class="bg-left ms-5 behind" alt="" />
            </div>
            <section class="container">
                <div class="card mb-3 rounded-3">
                    <div class="row g-0 bg-primary rounded text-light">
                        <div class="col-md-2">
                            <div class="img-container">
                                <img
                                    src={dummyImg}
                                    class="custom-img rounded-start"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <p class="text-50">
                                    #1 <span>16 June 2022</span>
                                </p>
                                <h5 class="card-title fw-bold m-0">
                                    Mathematics
                                </h5>
                                <p class="text-50 m-0">Ms. Liora Smith</p>
                                <p class="text-50 m-0">Count more, fun more.</p>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                        <div class="col-3 flex-grow-1 px-2 meeting">
                            <div
                                class="
                                d-flex
                                justify-content-between
                                align-items-center
                            ">
                                <h1>Meetings</h1>
                                <a href="...">
                                    <i class="bi bi-plus-circle text-light fs-3"></i>
                                </a>
                            </div>
                            <Meeting order="1" />
                            <Meeting order="2" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="container">
                <div class="row">
                    <div class="col-2 d-none d-lg-block">
                        <div
                            class="
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
                            <i class="bi bi-journal-bookmark-fill fs-7"></i>
                            <h4>Assignment</h4>
                        </div>
                        <div
                            class="
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
                    <div class="col-12 col-lg-10">
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

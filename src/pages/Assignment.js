import bg5 from "../assets/images/bg5.svg";
import bg6 from "../assets/images/bg6.svg";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import Post from "../components/main/Post";
import Footer from "../components/main/Footer";

export default function Assignment() {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <div className="d-none d-sm-block">
                <img src={bg5} className="bg-right" alt="" />
                <img src={bg6} className="bg-left" alt="" />
            </div>
            <Navbar />
            <section
                className="
                container
                gap-3
                mb-5
            ">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>

            <Footer />
        </div>
    );
}

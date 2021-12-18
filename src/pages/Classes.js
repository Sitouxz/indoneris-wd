import bg5 from "../assets/images/bg5.svg";
import bg6 from "../assets/images/bg6.svg";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import Class from "../components/main/Class";
import Footer from "../components/main/Footer";

export default function Classes() {
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
                d-flex
                flex-wrap
                justify-content-center
                align-items-center
                gap-3
                mb-5
            ">
                <Class />
                <Class />
                <Class />
                <Class />
                <Class />
                <Class />
                <Class />
                <Class />
            </section>

            <Footer />
        </div>
    );
}

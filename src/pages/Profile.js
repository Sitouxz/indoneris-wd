import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import ProfileData from "../components/main/ProfileData";
import ProfileNav from "../components/main/ProfileNav";
import Class from "../components/main/Class";

export default function Profile() {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <ProfileData />
            <ProfileNav />
            <section
                className="
                container
                d-flex
                flex-wrap
                justify-content-center
                align-items-center
                gap-3
                mb-5
                mt-3
            ">
                <Class />
                <Class />
                <Class />
            </section>
            <Footer />
        </div>
    );
}

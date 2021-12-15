import "./assets/css/main.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Bottom from "./components/Bottom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-primary">
            <Navbar />
            <Header />
            <Features />
            <Bottom />
            <Contact />
            <Footer />
        </div>
    );
}

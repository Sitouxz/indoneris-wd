import "./assets/css/main.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";

function App() {
    return (
        <div className="bg-primary">
            <Navbar />
            <Header />
            <Features />
        </div>
    );
}

export default App;

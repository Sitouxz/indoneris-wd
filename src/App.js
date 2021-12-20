import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Classes from "./pages/Classes";
import Class from "./pages/Class";
import Profile from "./pages/Profile";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/class" element={<Class />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

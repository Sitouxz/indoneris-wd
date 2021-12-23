import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Classes from "./pages/Classes";
import Class from "./pages/Class";
import Profile from "./pages/Profile";
import Assignment from "./pages/Assignment";
import store from './flux/store';

export default function App() {
    return (
        <Provider store={store}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/class" element={<Class />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assignment" element={<Assignment />} />
        </Routes>
    </Provider>
    );
}

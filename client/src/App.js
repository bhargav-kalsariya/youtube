import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/profile/Profile";
import Video from "./components/video/Video";

function App() {
    return (
        <Routes>
            <Route element={<ProtectedRoute />} >
                <Route element={<Home />} >
                    <Route path="/" element={<Video />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    );
}

export default App;

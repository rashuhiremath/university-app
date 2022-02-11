import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Departments from "./components/Departments";
import Home from "./components/Home";
import Admission from "./components/Admission";
import AdmissionRegistration from "./components/AdmissionRegistration";
import Login from "./components/Login";
import Placements from "./components/Placements";
import Calender from "./components/Calender";
import Blogs from "./components/Blogs";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Departments" element={<Departments />} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/registration" element={<AdmissionRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/events" element={<Calender />} />
          <Route path="/blogs" element={<Blogs />} />
            <Route path="/user-signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

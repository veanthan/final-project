import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RagSignIn from "./Component/Rag/Authorization/RagSignIn";
import RagSignUp from "./Component/Rag/Authorization/RagSignUp";
import Home from "./Component/Rag/HomePage/Home";
import RagAbout from "./Component/Rag/About/RagAbout.jsx";
import FindRequest from "./Component/Rag/Request/FindRequest";
import RagProfile from "./Component/Rag/Profile/RagProfile.jsx";
import RagService from "./Component/Rag/Service/RagService.jsx";
import ConsumerSignIn from "./Component/Consumer/Authorization/ConsumerSignIn.jsx";
import ConsumerSignUp from "./Component/Consumer/Authorization/ConsumerSignUp.jsx";
import ConsumerHome from "./Component/Consumer/HomePage/ConsumerHome.jsx";
import ConsumerAbout from "./Component/Consumer/About/ConsumerAbout.jsx";
import ConsumerProfile from "./Component/Consumer/Profile/ConsumerProfile.jsx";
import ConsumerService from "./Component/Consumer/Service/ConsumerService.jsx";
import Picker from "./Component/Consumer/Find/Picker.jsx";
import RagPosting from "./Component/Consumer/Find/RagPosting.jsx";
import Navbar from "./Component/Rag/Navbar/Navbar.jsx";
import Welcome from "./Component/Rag/Welcome/Welcome.jsx";

// import Navbar from './Component/Consumer/Navbar/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/consumersignin" element={<ConsumerSignIn />} />
        <Route path="/consumersignup" element={<ConsumerSignUp />} />
        <Route path="/consumerhome" element={<ConsumerHome />} />
        <Route path="/consumerabout" element={<ConsumerAbout />} />
        <Route path="/consumerfind" element={<RagPosting />} />
        <Route path="/consumerprofile" element={<ConsumerProfile />} />
        <Route path="/consumerservice" element={<ConsumerService />} />

        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<RagSignIn />} />
        <Route path="/signup" element={<RagSignUp />} />
        <Route path="/ragabout" element={<RagAbout />} />
        <Route path="/findrequest" element={<FindRequest />} />
        <Route path="/ragprofile" element={<RagProfile />} />
        <Route path="/ragservice" element={<RagService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

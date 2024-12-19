import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About";
import './Styles/Global.css';
import ErrorBoundary from "./ErrorBoundary.jsx";

const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import SignInForm from "./signInForm/SignInForm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route path="sign-in" element={<SignInForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

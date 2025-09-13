import React from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import SignupPage from "./pages/SignupPage";
import "animate.css";

// import Shop from "./pages/Shop";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* other routes */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import {Routes,Route
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Component/Footer";




function App() {
  return(
    <>
      <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;

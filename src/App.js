import React from "react";
import {Routes,Route
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Component/Footer";
import ScratchPage from "./Pages/ScratchPage";




function App() {
  return(
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/scratcch&win' element={<ScratchPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;

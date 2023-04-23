import React from "react";
import {Routes,Route
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import LandingPage from "./Pages/LandingPage";




function App() {
  return(
    <>
      <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    </>
  )
}

export default App;

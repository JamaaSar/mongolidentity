import React from "react";

import { Route, Routes } from "react-router-dom";
import AboutusPage from "./AboutusPage";
import './App.css';
import Footer from "./components/footer/Footer";
import Getinvolved from "./components/getinvolved/Getinvolved";
import Navbar from "./components/header/Navbar";
import Homepage from './Homepage';
import NewsPage from "./NewsPage";
import Ouraccomplishment from "./Ouraccomplishment";
import Ourstory from "./Ourstory";
import Ourteam from "./Ourteam";
import Whatwedo from "./Whatwedo";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' exact={"true"} element={<Homepage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route element={<AboutusPage />}>
          <Route path="/aboutus/ourstory" element={<Ourstory />} />
          <Route path="/aboutus/team" element={<Ourteam />} />
          <Route path="/aboutus/accomplishments" element={<Ouraccomplishment />} />
          <Route path="/aboutus/whatwedo" element={<Whatwedo />} />
        </Route>

      </Routes>



      <Getinvolved />
      <Footer />
    </>
  );
}


export default App;

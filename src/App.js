import React from "react";

import { Route, Routes } from "react-router-dom";
import AboutusPage from "./AboutusPage";
import './App.css';
import Footer from "./components/footer/Footer";
import Getinvolved from "./components/getinvolved/Getinvolved";
import Navbar from "./components/header/Navbar";
import Homepage from './Homepage';
import NewsPage from "./NewsPage";
import Ourstory from "./Ourstory";
import Ourteam from "./Ourteam";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' exact={"true"} element={<Homepage />} />
          <Route path='/news' exact={"true"} element={<NewsPage />} />
          <Route element={<AboutusPage />}>
            <Route path="/aboutus/ourstory" element={<Ourstory />} />
            <Route path="/aboutus/team" element={<Ourteam />} />
          </Route>

        </Routes>

      </div>

      <Getinvolved />
      <Footer />
    </>
  );
}


export default App;

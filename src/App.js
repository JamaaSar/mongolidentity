import React from "react";

import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './Homepage';

function App() {
  return (
    <>

      <Route path='/' exact={"true"} element={<Homepage />} />

    </>
  );
}


export default App;

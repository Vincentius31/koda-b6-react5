import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import ResultPage from "./Pages/ResultPage";
import Navbar from "./Components/Navbar";

import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormPage/>}/>
        <Route path="/results" element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

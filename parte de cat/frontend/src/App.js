import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Obra from './screens/Obra';
import Users from './screens/Users'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/obra" element={<Obra/>}/>
        <Route path="/user" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

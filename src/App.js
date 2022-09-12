import React from 'react';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import { Header } from './Components/Layouts/Header/Header';
import { Footer } from './Components/Layouts/Footer/Footer';
import { Login } from './Components/Pages/Login/Login';
import { Register } from './Components/Pages/Register/Register';
import { Home } from './Components/Pages/Home/Home';
import { Favorites } from './Components/Pages/Favorites/Favorites';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} /> */
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
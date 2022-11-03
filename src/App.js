import React,{useEffect,useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import {client} from './client';
import {Footer} from './container';
import Home from './pages/Home';
import { Navbar } from './components';
import PieceDetail from './pages/PieceDetail';
import ArtisteDetails from './pages/ArtisteDetails';
import './App.scss';

function App() {
  const [pieces, setPieces] = useState([]);
  

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query)
      .then((data)=>setPieces(data))
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pieces={pieces}/>}/>
        <Route path="/galerie/:id" element={<PieceDetail pieces={pieces}/>}/>
        <Route path="/artiste" element={<ArtisteDetails />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Tooltip from './components/Tooltip';
import Etusivu from "./components/Etusivu";
import RaporttiHistoria from "./components/RaporttiHistoria";
import Ohjeet from "./components/Ohjeet";
import Raportinluonti from './components/Raportinluonti';
import PdfUpload from "./components/PdfUpload";
import Tarkastuskohdat from "./components/Tarkastuskohdat";
import ProgressBar from './components/ProgressBar';

import "./App.css";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    
      <Tooltip text="Ohjeita raporttiin">
        <button>Vinkki</button>
      </Tooltip>

      <h1>Raportin Edistyminen</h1>
      <ProgressBar value={progress} />
      
      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path="/raportit" element={<RaporttiHistoria />} />
        <Route path="/tarkastuskohdat" element={<Tarkastuskohdat />} />
        <Route path="/ohjeet" element={<Ohjeet />} />
        <Route path="/luo_uusi_raportti" element={<Tarkastuskohdat />} />
      </Routes>
    </div>
  );
};

export default App;

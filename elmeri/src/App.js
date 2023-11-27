
import "./App.css";
import Etusivu from "./components/Etusivu";
import RaporttiHistoria from "./components/RaporttiHistoria";
import PdfUpload from "./components/PdfUpload";
import Tarkastuskohdat from "./components/Tarkastuskohdat";
import Ohjeet from "./components/Ohjeet";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Etusivu/>}></Route>
    <Route path="/raportit" element={<RaporttiHistoria/>}></Route>
    <Route path="/" element={<Etusivu/>}></Route>
    <Route path="/luo_uusi_raportti" element={<Tarkastuskohdat/>}></Route>
    <Route path="/" element={<Etusivu/>}></Route>
    <Route path="/ohjeet" element={<Ohjeet/>}></Route>
  </Routes>
  </div>
  );
}

export default App;

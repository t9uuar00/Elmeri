
import "./App.css";
import Etusivu from "./components/Etusivu";
import RaporttiHistoria from "./components/RaporttiHistoria";
import PdfUpload from "./components/PdfUpload";
import Tarkastuskohdat from "./components/Tarkastuskohdat";
import Raportinluonti from './components/Raportinluonti';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Etusivu/>}></Route>
    <Route path="/raportit" element={<RaporttiHistoria/>}></Route>
    <Route path="/tarkastuskohdat" element={<Tarkastuskohdat/>}></Route>
    <Route path="/" element={<Etusivu/>}></Route>
    <Route path="/luo_uusi_raportti" element={<Raportinluonti/>}></Route>
  </Routes>
  );
}

export default App;

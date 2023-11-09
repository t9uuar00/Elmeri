import "./App.css";
import Etusivu from "./components/Etusivu";
import RaporttiHistoria from "./components/RaporttiHistoria";
import PdfUpload from "./components/PdfUpload";
import Tarkastuskohdat from "./components/Tarkastuskohdat";

function App() {
  return (
    <div className="App">
      <RaporttiHistoria />
      <Etusivu></Etusivu>
      <Tarkastuskohdat></Tarkastuskohdat>
      <PdfUpload/>
    </div>
  );
}

export default App;

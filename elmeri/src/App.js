import './App.css';
import Etusivu from './components/Etusivu';
import Tarkastuskohdat from './components/Tarkastuskohdat';
import Raportinluonti from './Raportinluonti';

function App() {
  return (
    <div className="App">
      <Etusivu></Etusivu>
      <Raportinluonti />
      
      <Tarkastuskohdat></Tarkastuskohdat>
    </div>
  );
}

export default App;

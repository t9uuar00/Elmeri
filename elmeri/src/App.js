import './App.css';
import Etusivu from './components/Etusivu';

ui_saana
import RaporttiHistoria from './components/RaporttiHistoria';

//test
import { collection, addDoc } from "firebase/firestore";
import {firestoreDb} from './firebase';


//example, for testing firestore
const addData = async () => {
 
  try {
      const docRef = await addDoc(collection(firestoreDb, "raports"), {
        raport: "test",    
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

import Tarkastuskohdat from './components/Tarkastuskohdat';
  main

function App() {
  return (
    <div className="App">
ui_saana
      <button onClick={addData}>Add data</button>
      <RaporttiHistoria/>
=======
      <Etusivu></Etusivu>
      <Tarkastuskohdat></Tarkastuskohdat>
  main
    </div>
  );
}

export default App;

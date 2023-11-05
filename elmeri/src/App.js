import "./App.css";
import Etusivu from "./components/Etusivu";
import RaporttiHistoria from "./components/RaporttiHistoria";
import PdfUpload from "./components/PdfUpload";
import Tarkastuskohdat from "./components/Tarkastuskohdat";

//test
import { collection, addDoc } from "firebase/firestore";
import { firestoreDb } from "./firebase";

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
};

function App() {
  return (
    <div className="App">
      <button onClick={addData}>Add data</button>
      <RaporttiHistoria />
      <Etusivu></Etusivu>
      <Tarkastuskohdat></Tarkastuskohdat>
    </div>
  );
}

export default App;

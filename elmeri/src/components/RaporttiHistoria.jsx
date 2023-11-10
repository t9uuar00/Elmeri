import React, { useState, useEffect } from "react";
import RaporttiKortti from "./RaporttiKortti";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { firestoreDb, collection, getDocs } from "../firebase";

//Sivu, joka näyttää tehdyt raportit
export default function RaporttiHistoria() {
  const [isArrowDown, setArrowState] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [raportMetadata, setRaportMetadata] = useState([]);

  //Hae raporttien Firebase storage metadata Firestoresta
  async function fetchAllRaportMetadata() {
    //Firestore raportti kokoelma, jossa metatiedot PDF-tiedostoista
    const raportCollectionRef = collection(firestoreDb, "raports");

    try {
      const raportMetadataSnapshot = await getDocs(raportCollectionRef); //Hae dokumentit Firestoresta "Raports"-kokoelmasta
      const newRaportMetadata = [];

      raportMetadataSnapshot.forEach((raport) => {
        newRaportMetadata.push(raport.data()); //Lisää dokumentti-objektit väliaikaseen jonoon
      });

      setRaportMetadata(newRaportMetadata); //Päivitä state array dokumenttien metadatalla
    } catch (error) {
      console.log("Error fetching documents: ", error);
    }
  }

  useEffect(() => {
    fetchAllRaportMetadata();
  }, []); //Suorittaa itsensä komponentin rakentuessa

  return (
    <div className="Raporttihistoria-container">
      <div className="Header">
        <p>Raportit</p>
      </div>
      <div className="Raportti-sorting">
        {isArrowDown ? (
          <AiOutlineArrowDown
            size={20}
            onClick={() => setArrowState(!isArrowDown)}
          />
        ) : (
          <AiOutlineArrowUp
            size={20}
            onClick={() => setArrowState(!isArrowDown)}
          />
        )}
        <input
          placeholder="Hae raporttia..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        ></input>
      </div>
      <div>
        {raportMetadata.map((raport) => (
          <RaporttiKortti raportData={raport} key={raport.url} />
        ))}
      </div>
    </div>
  );
}

function sortReportsByDate(isArrowDown) {
  //Päivitä reportti itemit päivämäärän mukaan
  if (isArrowDown) {
    //Firestore query newest first(?) Tai lajittelu täällä
  } else {
    //Firestore query oldest first(?)
  }
}

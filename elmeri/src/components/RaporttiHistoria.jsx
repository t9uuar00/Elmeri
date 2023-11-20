import React, { useState, useEffect } from "react";
import RaporttiKortti from "./RaporttiKortti";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { firestoreDb, collection, getDocs, query, orderBy } from "../firebase";

//Sivu, joka näyttää tehdyt raportit
export default function RaporttiHistoria() {
  const [isArrowDown, setArrowState] = useState(true);
  const [textValue, setTextValue] = useState("");
  const [raportMetadata, setRaportMetadata] = useState([]);

   //Hae raporttien Firebase storage metadata Firestoresta päivämäärällä lajiteltuna
  async function fetchReportsByDate() {
    //Firestore raportti kokoelma, jossa metatiedot PDF-tiedostoista
    const raportCollectionRef = collection(firestoreDb, "raports");

    if (isArrowDown) {
      try {
        const raportMetadataSnapshot = await getDocs(
          query(raportCollectionRef, orderBy("date_created", "desc")) // Lajittelu uusimmasta vanhimpaan Raports-kokoelmasta
        );

        //Jono haettuja raporttiobjekteja
        const newRaportMetadata = raportMetadataSnapshot.docs.map((doc) =>
          doc.data()
        );
        //Päivitä raportMetaData state -jono raporttien metadatalla
        setRaportMetadata(newRaportMetadata);
      } catch (error) {
        console.log("Firestore-dokumenttien haku ei onnistunut. Error: ", error);
      }
    } else {
      try {
        const raportMetadataSnapshot = await getDocs(
          query(raportCollectionRef, orderBy("date_created", "asc")) // Lajittelu vanhimmasta uusimpaan Raports-kokoelmasta
        );

        const newRaportMetadata = raportMetadataSnapshot.docs.map((doc) =>
          doc.data()
        );

        setRaportMetadata(newRaportMetadata);
      } catch (error) {
        console.log("Firestore-dokumenttien haku ei onnistunut. Error: ", error);
      }
    }
  }

  //Suorittaa itsensä komponentin rakentuessa
  useEffect(() => {
    fetchReportsByDate();

  }, [isArrowDown]); //Jos isArrowDown-state vaihtuu, kutsu uudelleen

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

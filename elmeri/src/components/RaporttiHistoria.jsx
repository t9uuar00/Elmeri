import React, { useState } from 'react'
import RaporttiKortti from './RaporttiKortti'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { firebaseDb, storageRef, getDownloadURL } from '../firebase'

//Sivu, joka näyttää tehdyt raportit
export default function RaporttiHistoria() {

  const [isArrowDown, setArrowState] = useState(false)
  const [textValue, setTextValue] = useState("")
  const pdfRef = storageRef.bucket;
  const [pdfUrl, setPdfUrl] = useState("")


  getDownloadURL(storageRef)
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      console.log(url)
      setPdfUrl(url)

    })
    .catch((error) => {
      console.log("error" + error)
    });
  let testArray = [
    { "id": "abc", "tila": "Hybridilabra", "pvm": "12.10.2023" },
    { "id": "bcd", "tila": "Hybridilabra", "pvm": "10.10.2023" },
    { "id": "aaa", "tila": "Toinen labra", "pvm": "14.10.2023" },]

  return (
    <div className='Raporttihistoria-container'>
      <div className='Header'>
        <p>Raportit</p>
      </div>
      <div className='Raportti-sorting'>
        {isArrowDown ? <AiOutlineArrowDown size={20} onClick={() => setArrowState(!isArrowDown)} /> : <AiOutlineArrowUp size={20} onClick={() => setArrowState(!isArrowDown)} />}
        <input placeholder='Hae raporttia...' value={textValue} onChange={e => setTextValue(e.target.value)}></input>
      </div>
      <div>
        {testArray.map((raportti) => (
          <RaporttiKortti tiedot={raportti} key={raportti.id} />
        ))}
        <iframe src={pdfUrl} width={1000} height={500} />
      </div>
    </div>
  )
}

function sortReportsByDate(isArrowDown) {

  //Päivitä reportti itemit päivämäärän mukaan
  if (isArrowDown) {

    //Firestore query newest first(?) Tai lajittelu täällä
  }
  else {

    //Firestore query oldest first(?)
  }
}

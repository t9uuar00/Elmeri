import React from "react";
import { useState } from "react";
import {
  firestoreDb,
  storageRef,
  getDownloadURL,
  ref,
  uploadBytes,
} from "../firebase";
import { addDoc, collection, Timestamp, setDoc, doc } from "firebase/firestore";

export default function PdfUpload() {
  const currentDate = Timestamp.now();
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  let date = `${day}.${month}.${year}`;
  let fileName = `ElmeRRRIII_${date}`;

  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  //Tietyn raportin sijainti Firebase storagessa
  const raportRef = ref(storageRef, `/raports/${fileName}`);
  const raportsCollection = collection(firestoreDb, "raports");

  //Hae ja valitse tiedosto
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //Lataa tiedosto Firebase storageen
  const handleFileUpload = () => {
    if (selectedFile) {
      uploadBytes(raportRef, selectedFile).then((snapshot) => {
        console.log("Tiedosto ladattu Firebase storageen!", snapshot);
        //note to self, handle this better
        getDownloadURL(raportRef).then((url) => {
          saveFileMetadataToFirestore(url);
        });
      });
    }
  };

  //Lisää tiedoston metadata, mm. linkki tiedostoon
  const saveFileMetadataToFirestore = (url) => {
    const fileMetadata = {
      name: fileName,
      url: url,
      room: "Hybridilabra",
      date_created: currentDate,
    };

    //Lisätään ylläluotu objekti Firestoreen
    addDoc(raportsCollection, fileMetadata)
      .then((docRef) => {
        const id = docRef.id;
        console.log("File metadata saved to Firestore with ID: ", id);
        return id;
      })
      .then((id) => {
        //Päivitetään dokumentti ID myös omaksi fieldiksi dokumenttiin
        setDoc(doc(firestoreDb, `raports/${id}`), { id }, { merge: true });
        window.location.reload(); //Would be better as state transition refresh
      })
      .catch((error) => {
        console.error("Error saving metadata: ", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

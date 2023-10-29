import React from 'react'
import { useState } from 'react'
import { firestoreDb, storageRef, getDownloadURL, ref, uploadBytes } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function PdfUpload() {

    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let date = `${day}.${month}.${year}`;
    let fileName = `Elmeri_${date}_3`

    const [selectedFile, setSelectedFile] = useState(null)
    const [downloadUrl, setDownloadUrl] = useState(null)

    const reportRef = ref(storageRef, `/raports/${fileName}`)
    const raportsCollection = collection(firestoreDb, 'raports')

    //Hae ja valitse tiedosto
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    //Lataa tiedosto Firebase storageen
    const handleFileUpload = () => {
        if (selectedFile) {
            uploadBytes(reportRef, selectedFile).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot);
                //note to self, handle this better
                getDownloadURL(reportRef).then((url) => { setDownloadUrl(url); saveFileMetadataToFirestore()})
            });

            console.log(downloadUrl)
        }
    };

    const saveFileMetadataToFirestore = () => {

        const fileMetadata = {
            name: fileName,
            url: downloadUrl
        }

        addDoc(raportsCollection, fileMetadata)
            .then((docRef) => {
                console.log('File metadata saved with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error saving metadata: ', error);
            })

    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload File</button>
        </div>
    )
}
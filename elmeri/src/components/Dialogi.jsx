import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {storageRef, ref, deleteObject} from '../firebase'

export default function Dialogi() {

    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {

        setOpen(true)

    }

    const handleClose = () => {

        setOpen(false)
    }

    const handleFirebaseDelete = () => {

      const fileRef = ref(storageRef, 'raports/Elmeri_29.9.2023');

      deleteObject(fileRef).then(() => {
        console.log("Poistettu tietokannasta");

      })
      .catch((error) => {

        console.log("Deleting wasn't succesfull. Error: " + error)
      })



    }

  return (
    <div>
        <Button className="errorButton" variant="contained" color="error" onClick={handleClickOpen}>
        Poista
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Haluatko varmasti poistaa raportin?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Poista raportti pysyvästi.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ei</Button>
          <Button onClick={() => {handleClose(); handleFirebaseDelete()}} autoFocus>
            Kyllä
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}



import React from 'react'
import Dialogi from './Dialogi'

export default function FirebaseRepo() {

  
  function deleteReportFromFirebase(){

    console.log("Poistettu!!!!!!")

  }

  <Dialogi deleteReport = {deleteReportFromFirebase}/>

  return (
    <div>FirebaseRepo</div>
  )
}


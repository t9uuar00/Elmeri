import React from 'react'
import '../App.css';
import { TbReportAnalytics } from "react-icons/tb";

//Yksittäisen raportin tiedot
export default function RaporttiKortti(props) {
  return (
    <div className='Raporttikortti' onClick={ () => {} /**nagivaatio kortin id:n perusteella**/}>
        <TbReportAnalytics size={25}/>
        <div>{props.tiedot.tila}</div>
        <div>{props.tiedot.pvm}</div>
        <button className='errorButton' onClick={deleteReport}>Poista</button>
    </div>
  )
}

function deleteReport(){

    //Ask if user is sure, dialog etc
    //firebase query to delete report
}

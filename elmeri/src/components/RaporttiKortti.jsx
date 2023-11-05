import React from 'react'
import '../App.css';
import { TbReportAnalytics } from "react-icons/tb";
import Dialogi from './Dialogi';

//Yksittäisen raportin tiedot
export default function RaporttiKortti(props) {

  const date = new Date(props.tiedot.date_created.seconds * 1000)
  const dateString = date.toLocaleDateString();
  
  return (
    <div className='Raporttikortti' onClick={() => { } /**nagivaatio kortin id:n perusteella**/}>
      <TbReportAnalytics size={25} />
      <div>{props.tiedot.name}</div>
      <div>{props.tiedot.room}</div>
      <div>{dateString}</div>
      <div><a href={props.tiedot.url} target="_blank" download>Lataa</a></div>
      <Dialogi />
    </div>
  )
}

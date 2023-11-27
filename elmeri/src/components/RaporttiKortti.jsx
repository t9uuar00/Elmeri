import React from 'react'
import '../App.css';
import { TbReportAnalytics } from "react-icons/tb";
import Dialogi from './Dialogi';

//Yksittäisen raportin tiedot
export default function RaporttiKortti(props) {

// Firebase timestampin formatointi
const date = props.raportData.date_created.toDate();
const day = date.getDate();
const month = date.getMonth() + 1; // Kuukaudet on nollaindeksoituja, joten lisätään yksi
const year = date.getFullYear();
const formattedDate = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
  
  return (
    <div className='Raporttikortti' onClick={() => { } /**nagivaatio kortin id:n perusteella**/}>
      <TbReportAnalytics size={25} />
      <div>{props.raportData.name}</div>
      <div>{props.raportData.room}</div>
      <div>{formattedDate}</div>
      <div><a href={props.raportData.url} target="_blank" download rel="noopener noreferrer">Avaa</a></div>
      <Dialogi name={props.raportData.name} id={props.raportData.id}/>
    </div>
  )
}
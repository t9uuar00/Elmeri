import React from "react";
import '../App.css';
import Button from '@mui/material/Button';
import {IoCreate} from "react-icons/io5"
import { TbReportAnalytics } from "react-icons/tb";
import {AiOutlineInfoCircle} from "react-icons/ai"

export default function Etusivu() {
  return (
    <div>
      <div className="Header">
        <p>Elmeri – Tarkistuskierrokset</p>
        </div>
      <div className ="Etusivu">
      <Button variant="outlined" startIcon={<IoCreate/>} style={{ textTransform: "none", padding: "14px 0px" }} >Luo uusi</Button>
      <Button variant="outlined" startIcon={<TbReportAnalytics/> } style={{ textTransform: "none", padding: "14px 0px" }} >Raportit</Button>
      <Button variant="outlined" startIcon={<AiOutlineInfoCircle/>} style={{ textTransform: "none", padding: "14px 0px" }} >Ohjeet</Button>
      </div>
    </div>
  )
};
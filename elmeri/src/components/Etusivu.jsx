import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import {IoCreate} from "react-icons/io5"
import { TbReportAnalytics } from "react-icons/tb";
import {AiOutlineInfoCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Header from './Header';

export default function Etusivu() {

  return (
    <div>
      <div>
      <Header></Header>
      </div>
      <div className ="Etusivu">
      <Link to="/luo_uusi_raportti">
      <Button variant="outlined" startIcon={<IoCreate/>} style={{ textTransform: "none", padding: "14px 0px" }} >Luo uusi</Button>
      </Link>
      <Link to="raportit">
      <Button variant="outlined" startIcon={<TbReportAnalytics/> } style={{ textTransform: "none", padding: "14px 0px" }} >Raportit</Button>
      </Link>
      <Link to="/ohjeet"/>
      <Button variant="outlined" startIcon={<AiOutlineInfoCircle/>} style={{ textTransform: "none", padding: "14px 0px" }} >Ohjeet</Button>
      <Link/>
      </div>
    </div>
  )
};
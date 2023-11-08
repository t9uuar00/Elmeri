import React from 'react'
import '../App.css';
import PlusMinus from './PlusMinus';

export default function Tarkastuskohdat() {
  return (
    <div>
    <header style={{ position: 'absolute', left: '20px', top: '10px' }}><h1>Elmeri</h1></header>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <PlusMinus></PlusMinus>

        <div class="tooltip">Tips
          <span class="tooltiptext">Älä täytä väärin</span>
        </div>
            
      </div>
    </div>
  )
};
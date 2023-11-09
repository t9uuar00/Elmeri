import React from 'react'
import PlusMinus from './PlusMinus'

export default function Tarkastuskohdat() {
  return (
    <div>
    <header style={{ position: 'absolute', left: '20px', top: '10px' }}><h1>Elmeri</h1></header>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Turvallisuusraportti</h1>
        <h2>Havainnoitsijat:</h2>
        <h2>Tila:</h2>
        <PlusMinus></PlusMinus>
      </div>
    </div>
  )
};
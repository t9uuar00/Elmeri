import React from 'react'
import PlusMinus from './PlusMinus'

export default function Tarkastuskohdat() {
  return (
    <div>
    <header style={{ position: 'absolute', left: '10px', top: '10px' }}>Elmeri</header>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Turvallisuusraportti</h1>
        <h2>Havainnoistijat:</h2>
        <PlusMinus></PlusMinus>
      </div>
    </div>
  )
};
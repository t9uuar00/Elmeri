import React, { useState } from 'react';
import Kamera from './Kamera';
import './style.css';

const PlusMinus = () => {
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);

  const handleNextTarget = () => {
    setCurrentTargetIndex((prevIndex) => (prevIndex + 1) % obsObjects.length);
  };

  const handlePreviousTarget = () => {
    setCurrentTargetIndex((prevIndex) => (prevIndex - 1 + obsObjects.length) % obsObjects.length);
  };

  const currentObject = obsObjects[currentTargetIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {currentObject && (
        <ObjectComponent key={currentTargetIndex} object={currentObject} index={currentTargetIndex} />
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '15%', marginTop: '20px' }}>
        <button onClick={handlePreviousTarget} disabled={currentTargetIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextTarget} disabled={currentTargetIndex === obsObjects.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};


  const obsObjects =  [{target: 'Työskentely', objs: [{obj: 'Riskinotto, Suojaimet, Vaatetus'}]},
  {target: 'Ergonomia', objs: [{obj: 'Fyysinen kuormitus'}, {obj: 'Työpisteiden ja välineiden ergonomia'}]}, 
  {target: 'Kone- ja laiteturvallisuus', objs: [{obj: 'Koneiden kunto ja suojalaitteet'}, {obj: 'Koneiden hallintalaitteet ja merkintä'}]}, 
  {target: 'Liikkumisturvallisuus', objs: [{obj: 'Kulkuteiden ja lattian rakenne, putoamissuojaus'}, {obj: 'Poistumistiet'}]},
  {target: 'Järjestys', objs: [{obj: 'Kulkuteiden ja lattioiden järjestys'}, {obj: 'Pöydät, päällyset, hyllyt'}, {obj: 'Jäteastiat'}]},
  {target: 'Työympäristötekijät', objs: [{obj: 'Melu'}, {obj:'Valaistus'}, {obj: 'Lämpöolosuhteet'}, {obj: 'Ilman puhtaus ja käsiteltävät aineet'}]}
];


const PlusMinusComponent = ({ index, innerIndex, handleIncrement, handleDecrement, count, label }) => {
  const [isKiireellisyysOpen, setIsKiireellisyysOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [responsibleParty, setResponsibleParty] = useState('');
  const [kiireellisyys, setKiireellisyys] = useState(null);
  const kiireellisyysOptions = ['Ei kiire', 'Kohtalainen', 'Kiireellinen'];

  const toggleKiireellisyysDropdown = () => {
    setIsKiireellisyysOpen(!isKiireellisyysOpen);
  };

  const handleTallenna = () => {
    // Sulkee dropdownin kun Kiireellisyys on valittu 
    if (kiireellisyys) {
      setIsKiireellisyysOpen(false);
    }
    // Tallentaa poikkeaman, vastuutahon ja kiireellisyyden tähän for debugging
    console.log('Reason saved:', reason);
    console.log('Responsible party saved:', responsibleParty);
    console.log('Kiireellisyys saved:', kiireellisyys);
  };

  const handlePeruuta = () => {
    setIsKiireellisyysOpen(false);
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="counter">
        <button onClick={() => handleDecrement(innerIndex)} className="button">-</button>
        <span id={`count-${index}-${innerIndex}`}>{count}</span>
        <button
          onClick={() => { handleIncrement(innerIndex);
            if (label === 'Ei kunnossa') 
            { toggleKiireellisyysDropdown(); }
          }}
          className="button">+</button>
      </div>
      <div className="label">{label}</div>
      {label === 'Ei kunnossa' && isKiireellisyysOpen && (
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        </div>
      )}
  {isKiireellisyysOpen && (
    <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Poikkeama"
        value={reason}
        onChange={(e) => setReason(e.target.value)}/>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Vastuutaho"
        value={responsibleParty}
        onChange={(e) => setResponsibleParty(e.target.value)}/>
    </div>

<div className="dropdown">
  <select
    id="kiireellisyysDropdown"
    value={kiireellisyys}
    onChange={(e) => setKiireellisyys(e.target.value)}>
    <option value="">Valitse kiireellisyys</option>
    {kiireellisyysOptions.map((option, index) => (
      <option key={index} value={option}>
        {option}
    </option>
    ))}
  </select>
</div>

<p><Kamera></Kamera></p>

    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <button onClick={handlePeruuta} className="button">
        Peruuta
      </button>
      <button onClick={handleTallenna} className="button">
        Lisää
      </button>
    </div>
  </div>)}
</div>)};

const ObjectComponent = ({ object, index }) => {
  const [counts, setCounts] = useState(object.objs.map(() => 0));
  const [additionalCounts, setAdditionalCounts] = useState(object.objs.map(() => 0));

  const handleIncrement = (innerIndex) => {
    const newCounts = [...counts];
    newCounts[innerIndex] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (innerIndex) => {
    if (counts[innerIndex] > 0) {
      const newCounts = [...counts];
      newCounts[innerIndex] -= 1;
      setCounts(newCounts);
    }
  };

  const handleIncrement2 = (innerIndex) => {
    const newCounts = [...additionalCounts];
    newCounts[innerIndex] += 1;
    setAdditionalCounts(newCounts);
  };

  const handleDecrement2 = (innerIndex) => {
    if (additionalCounts[innerIndex] > 0) {
      const newCounts = [...additionalCounts];
      newCounts[innerIndex] -= 1;
      setAdditionalCounts(newCounts);
    }
  };

  return (
    <div className="component" style={{ marginBottom: '20px' }}>
      <div className="text" style={{ fontWeight: 'bold', textAlign: 'center' }}>{object.target}</div>
      {object.objs.map((item, innerIndex) => (
        <div key={innerIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <div className="subText">{item.obj}</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
            <PlusMinusComponent
              index={index}
              innerIndex={innerIndex}
              handleIncrement={() => handleIncrement(innerIndex)}
              handleDecrement={() => handleDecrement(innerIndex)}
              count={counts[innerIndex]}
              label="Ei kunnossa"
            />
            <div style={{ margin: '0 10px' }}></div> {}
            <PlusMinusComponent
              index={index}
              innerIndex={innerIndex + object.objs.length}
              handleIncrement={() => handleIncrement2(innerIndex)}
              handleDecrement={() => handleDecrement2(innerIndex)}
              count={additionalCounts[innerIndex]}
              label="Kunnossa"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlusMinus;
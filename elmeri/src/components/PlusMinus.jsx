import React, { useState } from 'react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [reason, setReason] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTallenna = () => {
    // Handle saving the reason here (you can use 'reason' state)
    // Add your logic to handle saving the reason
    console.log('Reason saved:', reason);
    setIsDropdownOpen(false);
  };

  const handlePeruuta = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="counter">
        <button onClick={() => handleDecrement(innerIndex)} className="button">-</button>
        <span id={`count-${index}-${innerIndex}`}>{count}</span>
        <button
          onClick={() => {
            handleIncrement(innerIndex);
            if (label === 'Ei kunnossa') {
              toggleDropdown();
            }
          }}
          className="button"
        >
          +
        </button>
      </div>
      <div className="label">{label}</div>
      {label === 'Ei kunnossa' && isDropdownOpen && (
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Syy"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <button onClick={handlePeruuta}>Peruuta</button>
            <button onClick={handleTallenna}>Tallenna</button>
          </div>
        </div>
      )}
    </div>
  );
};

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
            <div style={{ margin: '0 10px' }}></div> {/* Spacer between buttons */}
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
import React, { useState } from 'react';
import './style.css';

const PlusMinus = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {obsObjects.map((object, index) => (
        <ObjectComponent key={index} object={object} index={index} />
      ))}
    </div>
  );
};

  const obsObjects =  [{target: 'Työskentely', objs: [{obj: 'Riskinotto, Suojaimet, Vaatetus'}]},
  {target: 'Ergonomia', objs: [{obj: 'Fyysinen kuormitus'}, {obj: 'Työpisteiden ja välineiden ergonomia'}]}, 
  {target: 'Kone- ja laiteturvallisuus', objs: [{obj: 'Koneiden kunto ja suojalaitteet'}, {obj: 'Koneiden hallintalaitteet ja merkintä'}]}, 
  {target: 'Liikkumisturvallisuus', objs: [{obj: 'Kulkuteiden ja lattian rakenne, putoamissuojaus'}, {obj: 'Poistumistiet'}]},
  {target: 'Järjestys', objs: [{obj: 'Kulkuteiden ja lattioiden järjestys'}, {obj: 'Pöydät, päällyset, hyllyt'}, {obj: 'Jäteastiat'}]},
  {target: 'Työympäristötekijät', objs: [{obj: 'Melu', obj:'Valaistus'}, {obj: 'Lämpöolosuhteet'}, {obj: 'Ilman puhtaus ja käsiteltävät aineet'}]}
];


const ObjectComponent = ({ object, index }) => {
  const [counts, setCounts] = useState(new Array(object.objs.length).fill(0));

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

  return (
    <div className="component" style={{ marginBottom: '20px' }}>
      <div className="text" style={{ fontWeight: 'bold' }}>{object.target}</div>
      {object.objs.map((item, innerIndex) => (
        <div key={innerIndex}>
          <div className="subText">{item.obj}</div>
          <div className="counter">
            <button onClick={() => handleDecrement(innerIndex)} className="button">-</button>
            <span id={`count-${index}-${innerIndex}`}>{counts[innerIndex]}</span>
            <button onClick={() => handleIncrement(innerIndex)} className="button">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlusMinus
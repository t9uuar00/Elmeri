import React, { useState } from 'react';
import './Raportinluonti.css'; // Import a CSS file for styling

function Raportinluonti() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [select1, setSelect1] = useState('Option 1');
  const [select2, setSelect2] = useState('Option A');
  const [dropdownOptions1, setDropdownOptions1] = useState(['Nimi']);
  const [dropdownOptions2, setDropdownOptions2] = useState(['Tila']);
  const [progress, setProgress] = useState(0);

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleSelectChange1 = (e) => {
    setSelect1(e.target.value);
  };

  const handleSelectChange2 = (e) => {
    setSelect2(e.target.value);
  };

  const handleAddClick1 = () => {
    setDropdownOptions1((prevOptions) => [...prevOptions, input1]);
    setProgress((prevProgress) => prevProgress + 10);
  };

  const handleAddClick2 = () => {
    setDropdownOptions2((prevOptions) => [...prevOptions, input2]);
    setProgress((prevProgress) => prevProgress + 10);
  };

  const handleClearClick1 = () => {
    setDropdownOptions1((prevOptions) => prevOptions.slice(0, -1));
    setProgress((prevProgress) => prevProgress - 10);
  };

  const handleClearClick2 = () => {
    setDropdownOptions2((prevOptions) => prevOptions.slice(0, -1));
    setProgress((prevProgress) => prevProgress - 10);
  };

  return (
    <div className="raportinluonti-container">
      <h1>Raportin Luonti</h1>
      <label htmlFor="progress">Progress:</label>
      <progress id="progress" value={progress} max="100" />
      <div className="input-with-dropdown">
        <div>
          <input
            type="text"
            id="textbox1"
            value={input1}
            onChange={handleInputChange1}
            placeholder="Etunimi Sukunimi"
          />
          <button onClick={handleAddClick1}>Lisää</button>
          <button onClick={handleClearClick1}>Poista</button>
        </div>
        <select id="dropdown1" value={select1} onChange={handleSelectChange1}>
          {dropdownOptions1.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="input-with-dropdown">
        <div>
          <input
            type="text"
            id="textbox2"
            value={input2}
            onChange={handleInputChange2}
            placeholder="Valitse Tila"
          />
          <button onClick={handleAddClick2}>Lisää</button>
          <button onClick={handleClearClick2}>Poista</button>
        </div>
        <select id="dropdown2" value={select2} onChange={handleSelectChange2}>
          {dropdownOptions2.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Raportinluonti;
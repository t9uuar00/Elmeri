import React, { useState } from 'react';

const PlusMinus = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = () => {
    setCount1((prevCount) => (prevCount + 1) % 100);
  };

  const handleDecrement1 = () => {
    setCount1((prevCount) => (prevCount - 1 + 100) % 100);
  };

  const handleIncrement2 = () => {
    setCount2((prevCount) => (prevCount + 1) % 100);
  };

  const handleDecrement2 = () => {
    setCount2((prevCount) => (prevCount - 1 + 100) % 100);
  };

  return (
    <div>
      <div className="component">
        <div className="text">Kunnossa</div>
        <div className="counter">
          <button onClick={handleDecrement1}>-</button>
          <span id="count1">{count1}</span>
          <button onClick={handleIncrement1}>+</button>
        </div>
      </div>

      <div className="component">
        <div className="text">Ei kunnossa</div>
        <div className="counter">
          <button onClick={handleDecrement2}>-</button>
          <span id="count2">{count2}</span>
          <button onClick={handleIncrement2}>+</button>
        </div>
      </div>
    </div>
  );
};

  export default PlusMinus
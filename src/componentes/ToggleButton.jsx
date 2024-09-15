import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={handleClick}>
        {isOn ? 'Desligar' : 'Ligar'}
      </button>
    </div>
  );
};

export default ToggleButton;

// Contador.js
import React, { useState } from 'react';

function Contador() {
  const [conta, setConta] = useState(0);

  return (
    <div>
      <h1>Contador-negativo: {conta}</h1>
      <h2>{conta}</h2>
      <button onClick={() => setConta(conta + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;

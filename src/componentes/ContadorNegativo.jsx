// Contador.js
import React, { useState } from 'react';

function ContadorNegativo() {
  const [conta, setConta] = useState(0);

  return (
    <div>
      <h1>Contador: {conta}</h1>
      <button onClick={() => setConta(conta - 1)}>Desin-incrementar</button>
    </div>
  );
}

export default ContadorNegativo;

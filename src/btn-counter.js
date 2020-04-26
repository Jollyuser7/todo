import React, { useState } from 'react';

const BtnCounter = () => {
  const [counter, setCounter] = useState(1);

  const Count = () => {
    setCounter( counter + 1 )
  };

  return(
    <button onClick={ Count } className="btn btn-secondary">
      Счетчик клика {counter}
    </button>
  )
}

export default BtnCounter;
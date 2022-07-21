import React from 'react';

const CountButtons = ({ incrementFn, decrementFn }) => {
  return (
    <div>
      <button onClick={incrementFn} data-testid="incrementBtn">
        +
      </button>
      <button onClick={decrementFn} data-testid="decrementBtn">
        -
      </button>
    </div>
  );
}

export default React.memo(CountButtons);
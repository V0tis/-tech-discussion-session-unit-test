import React from 'react';
import CountView from './components/CountView';
import CountButtons from './components/CountButtons';

function App() {
  const [count, setCount] = React.useState(0);

  const incrementHandler = React.useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrementtHandler = React.useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <div>
      <CountView count={count} />
      <CountButtons
        incrementFn={incrementHandler}
        decrementFn={decrementtHandler}
      />
    </div>
  );
}

export default App;
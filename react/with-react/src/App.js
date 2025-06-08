import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <div className='state'>{state}</div>
      <button onClick={
        () => {
          setState( 10);
          console.log('Button clicked, state is now:', state );
    }
      }>Click me</button>

      <button onClick={
        () => {
          setState(state - 154);
          console.log('Button clicked, state is now:', state);
        }
      }>click me to decrease</button>
    </div>
  );
}

export default App;



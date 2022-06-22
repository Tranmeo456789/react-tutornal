import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
let stateValue;

function useState(intialState) {

  if(stateValue === undefined){
    stateValue = intialState;
  }
  function setValue(value) {
    stateValue=value;
    // sau khi state thay đổi render thay đổi
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  return [stateValue,setValue];
}

function App() {
  const [counter, setCouter]=useState(1);

  const handleIncrement = function(){
    setCouter(counter+1);
  }
  const handleDecrement = function(){
    setCouter(counter-1);
  }
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

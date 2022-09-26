import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const handleClick1 = () => {
    setCounter(counter + 1);
  }
  
  const handleClick2 = () => {
    setCounter(counter - 1);
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'relative',
      width: '100%',
      height: '100%',
      top: '-25%',
    }}>
      Contador de pessoas      
      <div style={{
        fontSize: '290%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '10vh',
          backgroundColor: 'green',
          color: 'white',
        }}
          onClick={handleClick1}>+</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '10vh',
          backgroundColor: 'red',
          color: 'white',
        }}
          onClick={handleClick2}>-</button>
      </div>

      <div>
        <img src="https://static.wikia.nocookie.net/7a370ffa-7049-4223-a436-c11602ab9c76"/>
        <p>
          Dados pessoais: victormartinobre@hotmail.com
        </p>
        <p>
          Formação: Tentando
        </p>
        <p>
          Experiência: Estagiário de TI front-end
        </p>
        <p>
          Projetos: https://github.com/VictorMartinezNobrega
        </p>
      </div>
    </div>
  )
}
  
export default App

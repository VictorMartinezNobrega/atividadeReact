import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

const App = () => {

  const [data, setData] = useState({
    firstNum: 0,
    secondNum: 0,
    resulto: 0
  }) 

  const multiple = (e) => {
    e.preventDefault()
    setData(prev => ({...prev, resulto: prev.firstNum * prev.secondNum}))
  } 

  const [counter, setCounter] = useState(0);
  
  const Click1 = () => {
    setCounter(counter + 1);
  }
  
  const Click2 = () => {
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

      <div class="geral">
        <h1>Multiplicador</h1>
          <form onSubmit={multiple}>
            <input type="number" value={data.firstNumber}
              onChange={e => setData(prev => ({...prev, firstNumber: Number(e.target.value)}))}
              />
            <input type="number" value={data.secondNumber}
              onChange={ e => setData(prev => ({...prev, secondNumber: Number(e.target.value)}))}
              />
                <input type="submit" value="Calcular"/>
           </form>
        <p><strong>Resulto: </strong><span>{data.result}</span></p>
      </div>

      <p>-------------------------------------------------</p>

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
          onClick={Click1}>+</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '10vh',
          backgroundColor: 'red',
          color: 'white',
        }}
          onClick={Click2}>-</button>
      </div>

      <p>-------------------------------------------------</p>

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

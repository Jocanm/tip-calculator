import './App.css';
import logo from './images/logo.svg'
import ResultOperation from './component/ResultOperation';
import { useState } from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img
        src={logo} alt="logo"
        className="w-16 mb-9"
      />
      <div className="bg-white rounded-lg flex justify-between items-center p-4 h-auto w-auto">
        <main className="mr-4 w-full h-full">
          <CustomInput 
          icono="fas fa-dollar-sign"
          title="Bill"
          />
          <TipButtons/>
          <CustomInput
          title="Number of People"
          icono="fas fa-user"
          />
        </main>
        <ResultOperation />
      </div>
    </div>
  );
}

const CustomInput = ({ value = 0, title = "hola",icono }) => {

  return (
    <div className="cont">
      <span className="text-cyan-darkest font-semibold">{title}</span>
        <input
          type="number"
          className="custom-input mt-1 special-input"
        />
        <i className={icono}></i>
    </div>
  )
}

const TipButtons = () =>{

  // const [lista1] = useState([5,10,15])
  // const [lista2] = useState([25,50,75])
  const [porcentajes] = useState([5,10,15,25,50,75])

  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        {
          porcentajes.map(e=>(
            <button>
              {e}
            </button>
          ))
        }
      </div>
      {/* <div className="flex justify-around">
        {
          lista2.map(e=>(
            <button>
              {e}
            </button>
          ))
        }
        <input 
        className="new-input"
        type="number" 
        placeholder="Custom"
        />
      </div>   */}
    </div>
  )
}

export default App;

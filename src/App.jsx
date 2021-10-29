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
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg p-4 h-auto w-fll sm:w-auto">
        <main className="mb-4 sm:mb-0 mr-0 sm:mr-4 w-full h-full">
          <CustomInput
            icono="fas fa-dollar-sign"
            title="Bill"
            name=""
          />
          <TipButtons
            text="Select tip %"
          />
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

const CustomInput = ({ value = 0, title = "hola", icono, name }) => {

  return (
    <div className="cont">
      <span className="text-cyan-dark font-bold text-xs tracking-wider">{title}</span>
      <input
        type="number"
        className="custom-input mt-1 special-input"
        name={name}
      />
      <i className={icono}></i>
    </div>
  )
}

const TipButtons = ({ text = "" }) => {

  const [porcentajes] = useState(["5%", "10%", "15%", "25%", "50%"])

  return (
    <div className="flex flex-col mb-5 mt-3">
      <h2 className="text-cyan-dark mb-2 tracking-wider text-xs font-bold">{text}</h2>
      <div className="btn-cont grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2">
        {
          porcentajes.map(e => (
            <button className="boton-1 hover:bg-cyan-strong hover:text-cyan-strongest">
              {e}
            </button>
          ))
        }
        <input
          type="number"
          placeholder="Custom"
          className="tip-input text-right"
        />

      </div>
    </div>
  )
}

export default App;

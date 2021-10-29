import './App.css';
import logo from './images/logo.svg'
import ResultOperation from './component/ResultOperation';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {

  const [bill, setBill] = useState("")
  const [people, setPeople] = useState("")
  const [porc, setPorc] = useState("")
  const [porcInput, setPorcInpute] = useState("")

  const reset = () => {
    setBill("")
    setPeople("")
    setPorc("")
    setPorcInpute("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img
        src={logo} alt="logo"
        className="w-16 mb-9"
      />
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg p-4 h-auto w-fll sm:w-auto">
        <main className="mb-4 sm:mb-0 mr-0 sm:mr-4 w-full h-full">
          <CustomInput
            value={bill}
            setValue={setBill}
            icono="fas fa-dollar-sign"
            title="Bill"
          />
          <TipButtons
            text="Select tip %"
            porc={porc}
            setPorc={setPorc}
            porcInput={porcInput}
            setPorcInpute={setPorcInpute}
          />
          <CustomInput
            value={people}
            setValue={setPeople}
            title="Number of People"
            icono="fas fa-user"
          />
        </main>
        <ResultOperation
          bill={bill}
          total={people}
          porc={porc}
          porcInput={porcInput}
          reset={reset}
        />
      </div>
    </div>
  );
}

const CustomInput = ({ value, setValue, title, icono }) => {

  const handleValue = ({ target }) => {
    setValue(target.value)
  }


  return (
    <div className="cont">
      <div className="flex justify-between">
        <span className="text-cyan-dark font-bold text-xs tracking-wider">{title}</span>
        <span className={`${value==="0"?"text-xs text-red-400 font-semibold":"hidden"}`}>Can't be zero</span>
      </div>
      <input
        type="number"
        className={`custom-input mt-1 special-input ${value==="0"&&"boder border-red-400 hover:border-red-400"}`}
        value={value}
        onChange={handleValue}
        placeholder="0"
      />
      <i className={icono}></i>
    </div>
  )
}

const TipButtons = ({ text, porc, setPorc, porcInput, setPorcInpute }) => {

  const [porcentajes] = useState([5, 10, 15, 25, 50])

  const handleCustomPorc = ({ target }) => {
    setPorcInpute(target.value)
    if (porcInput && porc !== "") setPorc("")
  }

  const handleButtonPorc = (value) => {
    setPorc(value)
    if (porc && porcInput !== "") setPorcInpute("")
  }

  return (
    <div className="flex flex-col mb-5 mt-3">
      <h2 className="text-cyan-dark mb-2 tracking-wider text-xs font-bold">{text}</h2>
      <div className="btn-cont grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2">
        {
          porcentajes.map((e) => (
            <button
              key={nanoid()}
              className={`boton-1 px-7 hover:bg-cyan-strong hover:text-cyan-strongest ${(e === porc ? "bg-cyan-strong text-cyan-strongest font-black" : "bg-cyan-strongest text-white font-bold")}`}
              onClick={() => {
                handleButtonPorc(e)
              }}
            >
              {`${e}%`}
            </button>
          ))
        }
        <input
          type="number"
          placeholder="Custom %"
          className="tip-input text-right"
          value={porcInput}
          onChange={handleCustomPorc}
        />

      </div>
    </div>
  )
}

export default App;

import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [simpsonApi,setSimpsonApi] = useState([])
  const [filtrarCard,setFiltrarCard] = useState([])
  const [buscador,setBuscador] = useState("")

  return (
    <div className='padre'>
      <Buscador simpsonApi={simpsonApi} setFiltrarCard={setFiltrarCard} buscador={buscador} setBuscador={setBuscador} /> 
      <MiApi filtrarCard={filtrarCard} setFiltrarCard={setFiltrarCard} setSimpsonApi={setSimpsonApi}   />
    </div>
  )
}

export default App

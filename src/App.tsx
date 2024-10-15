import { useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName'
import Resource from './components/Resource'

function App() {
  const [Megacredit,setMegacredit] = useState<number>(0)
  const [MegacreditProdctoin, setMegacreditProdctoin]=useState<number>(0)
  const changeMegacreditAmount = (increment:number)=>{
    setMegacredit(Megacredit+increment)
  }
  const changeMegacreditProduction=(increment:number)=>{
    setMegacreditProdctoin(MegacreditProdctoin+increment)
  }

  const [Steel,setSteel] = useState<number>(0)
  const [SteelProdctoin, setSteelProdctoin]=useState<number>(0)
  const changeSteelAmount = (increment:number)=>{
    setSteel(Steel+increment)
  }
  const changeSteelProduction=(increment:number)=>{
    setSteelProdctoin(SteelProdctoin+increment)
  }

  const nextRound = ()=>{
    setMegacredit(Megacredit+MegacreditProdctoin)
    setSteel(Steel+SteelProdctoin)
  }

  return (
    <div className="container">
      <PlayerName></PlayerName>
      <Resource 
      name="Megacredit" 
      amount={Megacredit} 
      changeAmount={changeMegacreditAmount} 
      production={MegacreditProdctoin}
      changeProduction={changeMegacreditProduction}></Resource>
      <Resource 
      name="Steel" 
      amount={Steel} 
      changeAmount={changeSteelAmount} 
      production={SteelProdctoin}
      changeProduction={changeSteelProduction}></Resource>
     
     
      <button onClick={nextRound} type='button'>next round</button>
    </div>
  )
}

export default App

import { FormEvent, useState } from "react"


const PlayerName = () => {

  const [isPlayerEdit, setIsPlayerEdit] = useState(false)
  const [playerName, setPlayerName] = useState('Player Name')

  const handlePlayerEdit = ()=>{
    setIsPlayerEdit(!isPlayerEdit)
  }

  const handlePlayerNameChamge = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPlayerName(e.target.value)
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    handlePlayerEdit()  
  }

  return (
    <>
      {isPlayerEdit ? (
        <form onSubmit={handleSubmit} className="playerInput">
          <input type="text" value={playerName} onChange={handlePlayerNameChamge}/>
          <button type="submit" >save</button>
        </form>
      ) : (
        <div onClick={handlePlayerEdit} className="playerName">
          <h1>{playerName}</h1>
        </div>
      )}
    </>
  );
}

export default PlayerName
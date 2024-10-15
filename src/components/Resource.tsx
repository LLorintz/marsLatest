
export type resourceProps={
    name:string;
    amount:number;
    production: number;
    changeAmount:(increment:number)=>void
    changeProduction:(increment:number)=>void
}

const Resource = (props:resourceProps) => {



  return (
    <div className="ResourceContainer">
    <p>{props.name}: <span>{props.amount}</span></p>
    <div className='buttonContainer'>
      <button onClick={()=>props.changeAmount(-1)} type="button">-</button>
      <button onClick={()=>props.changeAmount(1)} type="button">+</button>
    </div>
    <p>{props.name} production: <span>{props.production}</span></p>
    <div className='buttonContainer'>
      <button onClick={()=>props.changeProduction(-1)} type="button">-</button>
      <button onClick={()=>props.changeProduction(1)} type="button">+</button>
    </div>
  </div>
  )
}

export default Resource
import React, { useState } from 'react'
import useCreateWeight from './hooks/useCreateWeight';

const HomeRight = () => {
  const [weight,setWeights]=useState(0);
  const [date,setDate]=useState("");
  const {error,loading,postweight}=useCreateWeight();
  const addWeight=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    postweight(weight,date)
  }
  return (
    <div>
      <div>Add Weight</div>
      <form action="#">
        <div>
          <label>Weight: </label>
          <input type='number' name="weight" value={weight} onChange={(e)=>{setWeights(parseInt(e.target.value))}}></input>
        </div>
        <div>
          <label>date: </label>
          <input type='text' name="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
        </div>
        {error ? <div>{error}</div> : <></>}
        <div>
          <button onClick={(e)=>{addWeight(e)}} disabled={loading}>add Weight</button>
        </div>

      </form>
    </div>
  )
}

export default HomeRight
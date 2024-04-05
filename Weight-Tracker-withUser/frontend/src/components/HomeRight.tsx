import React, { useState } from 'react'

const HomeRight = () => {
  const [weight,setWeights]=useState(0);
  const [date,setDate]=useState("");
  return (
    <div>
      <div>Add Weight</div>
      <form>
        <div>
          <label>Weight: </label>
          <input type='number' name="weight" value={weight} onChange={(e)=>{setWeights(parseInt(e.target.value))}}></input>
        </div>
        <div>
          <label>date: </label>
          <input type='text' name="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
        </div>
        <button>add Weight</button>
      </form>
    </div>
  )
}

export default HomeRight
import useWeights from "../Hooks/useWeights"

import EachWeight from './EachWeight'
const HomeLeft = () => {
  const {state:weights}=useWeights()

  const showWeights=()=>{
    return weights.map((eachweight)=>{
      return <EachWeight eachweight={eachweight} key={eachweight._id}></EachWeight>
     
    })
  }
  
  return (
    <div style={{width:"75%",padding:"1rem"}}>
      {showWeights()}
    </div>
  )
}

export default HomeLeft
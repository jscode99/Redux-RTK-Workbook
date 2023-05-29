import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
// Actions
import { ordered, restocked } from './iceSlice'

const IceView = () => {
  const [restockValue, setRestockValue] = useState(0)
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of icecream - {numOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <br />
      <input type='number' value={restockValue} onChange={(e) => setRestockValue(parseInt(e.target.value))} />
      <br />
      <button onClick={() => dispatch(restocked(restockValue))}>Restock icecream</button>
    </div>
  )
}

export default IceView
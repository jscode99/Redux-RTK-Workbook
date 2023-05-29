import { useSelector, useDispatch } from "react-redux";
// Actions
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  console.log(noOfCakes);
  return (
    <div>
      <h1>Number of cakes - {noOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <br />
      <button onClick={() => dispatch(restocked(1))}>Restock cakes</button>
    </div>
  )
}

export default CakeView
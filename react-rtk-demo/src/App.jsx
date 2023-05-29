import { useEffect } from 'react'
// Selector
import { useSelector, useDispatch } from 'react-redux';
//Slice
import { fetchUsers } from './features/user/userSlice'
// Views
import CakeView from './features/cake/CakeView'
import IceView from './features/icecream/IceView'
import UserView from './features/user/UserView'
import './App.css'

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  console.log('Global state----->', state);
  return (
    <>
      <div>
        <CakeView />
        <IceView />
        <UserView />
      </div>
    </>
  )
}

export default App

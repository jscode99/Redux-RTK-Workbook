import { useEffect } from "react";
// Selector
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from "./app/hooks";
//Slice
import { fetchUsers } from "./features/user/userSlice";
// Views
import CakeView from "./features/cake/CakeView";
import IceView from "./features/icecream/IceView";
import UserView from "./features/user/UserView";
import "./App.css";

function App() {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("Global state----->", state);
  return (
    <>
      <div>
        <CakeView />
        <IceView />
        <UserView />
      </div>
    </>
  );
}

export default App;

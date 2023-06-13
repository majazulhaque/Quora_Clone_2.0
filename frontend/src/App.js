import './App.css';
import React from 'react';
import Quora from './components/Quora';
import Login from './components/auth/Login';
import { selectUser } from './feature/userSlice';
import {useSelector} from "react-redux";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? (<Quora/>):(<Login/>)
      }
    </div>
  );
}

export default App;

import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/QuoraBox.css";
import {selectUser } from "../feature/userSlice";
import {useSelector } from "react-redux";

function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className='quoraBox'>
        <div className="quoraBox__info">
            <Avatar src={user?.photo}/>
        </div>
        <div className="quoraBox__quora">
            <p>What is your question or link?</p>
        </div>

    </div>
  )
}

export default QuoraBox
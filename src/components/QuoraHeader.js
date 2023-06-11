import React from "react";
import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, HomeOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons';
import { Avatar, Button } from "@material-ui/core";
import "./css/QuoraHeader.css";

export default function QuoraHeader () {
  return (
  <div className="qHeader">
    <div className="qHeader-content">
        <div className="qHeader__logo">
            <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" />
            <div className="qHeader__icons">
                <div className="qHeader__icon"><HomeOutlined/></div> 
                <div className="qHeader__icon"><FeaturedPlayListOutlined/></div> 
                <div className="qHeader__icon"><AssignmentTurnedInOutlined/></div> 
                <div className="qHeader__icon"><PeopleAltOutlined/></div> 
                <div className="qHeader__icon"><NotificationsOutlined/></div> 
            </div>
            <div className="qHeader__input">
                <Search/>
                <input type="text" placeholder="Search question" />
            </div>
            <div className="qHeader__Rem">
                <Avatar/>
            </div>
            <Button>Add Question</Button>
        </div>
    </div>
    
  </div>
  );
}

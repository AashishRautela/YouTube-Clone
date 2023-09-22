import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";
import "../style/Body.css";
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  return (
    <div className='body'>
      {isMenuOpen ? (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      ) : null}
      <Outlet />
    </div>
  );
}

export default Body;

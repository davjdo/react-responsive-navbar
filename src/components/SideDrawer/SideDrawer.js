import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = props => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;

// AdminSideBar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../css/AdminSidebar.css'; // Import the AdminSidebar CSS
import { FaInfoCircle, FaChartBar, FaQuestionCircle, FaPlusCircle, FaUserShield, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

const AdminSideBar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:5000/api/logout', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then(response => {
        if (response.ok) {
          if (typeof onLogout === 'function') {
            onLogout();
          }
          navigate('/login'); // Redirect to the login page after successful logout
        } else {
          console.error('Logout failed');
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div className="sidebar">
      {/* Header with Logo and Heading */}
      <div className="sidebar-header">
        <img src="/images/compiler.png" alt="Logo" className="sidebar-logo" />
        <h2 className="sidebar-title">Compile-Run</h2>
      </div>

      {/* Navigation Links */}
      <ul className="sidebar-nav">
        <li>
          <NavLink 
            to="/infoboard" 
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            aria-label="InfoBoard"
            title="InfoBoard"
          >
            <FaInfoCircle className="nav-icon" />
            <span className="nav-text">InfoBoard</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/analytics" 
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            aria-label="Analytics"
            title="Analytics"
          >
            <FaChartBar className="nav-icon" />
            <span className="nav-text">Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/posted" 
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            aria-label="Posted Questions"
            title="Posted Questions"
          >
            <FaQuestionCircle className="nav-icon" />
            <span className="nav-text">Posted Questions</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/questions" 
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            aria-label="Add Questions"
            title="Add Questions"
          >
            <FaPlusCircle className="nav-icon" />
            <span className="nav-text">Add Questions</span>
          </NavLink>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout} aria-label="Logout" title="Logout">
        <FaSignOutAlt className="logout-icon" />
        <span className="logout-text">Logout</span>
      </button>
    </div>
  );
};

export default AdminSideBar;





/*
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

const AdminSideBar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:5000/api/logout', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then(response => {
        if (response.ok) {
          if (typeof onLogout === 'function') {
            onLogout();
          }
          navigate('/login'); // Redirect to the homepage after successful logout
        } else {
          console.error('Logout failed');
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/infoboard">InfoBoard</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/posted">Posted Questions</Link></li>
        <li><Link to="/questions"> Add Questions</Link></li>
        
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminSideBar;

*/
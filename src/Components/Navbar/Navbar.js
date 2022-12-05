import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';
import './Navbar.css'
function Navbar({ type }) {
  const { user, dispatch } = useContext(AuthContext);

  const navitage = useNavigate()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  const handleLogin = () => { 
    navitage("/login")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">booking App</span>
        </Link>

        {user ? (
          <>
            <span className='logout' onClick={handleLogout}>{user.username} -  Logout</span>
          </>
        ) : type !=='login' && (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar
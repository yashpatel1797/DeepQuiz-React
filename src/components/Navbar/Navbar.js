import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useTheme, useAuth } from 'context';
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { isLogin, firstName, authDispatch } = useAuth();
    const [toggle, setToggle] = useState(false);
    const logoutHandler = () => {
        setToggle(false)
        localStorage.clear();
        authDispatch({ type: "USER_LOGOUT" })
    }
    return (
        <nav className="nav-bar">
            <div className="nav-section">
                <div className="nav-logo">
                    <Link to="" className="logo-title fn-size-l">
                        <span>DeepQuiz</span>
                    </Link>
                </div>
            </div>
            <button className="btn btn-toggle" onClick={toggleTheme}>
                <span className="material-icons" id="light_mode"> {theme === "dark" ? "light_mode" : "dark_mode"} </span>
            </button>
            <div className="nav-user">

                <Link to={isLogin ? "/profile" : "/login"} className="btn nav-user-btn" onClick={() => setToggle(false)}>
                    <span className="material-icons" > person </span>
                    <span>{firstName ? `Hi ${firstName}` : "Login"} </span>
                </Link>
                {isLogin &&
                    <Link to="/login" className="btn nav-user-btn" onClick={logoutHandler}>
                        <span className="material-icons">
                            logout
                        </span>
                        <span>Logout</span>
                    </Link>
                }
            </div>
        </nav>
    )
}

export { Navbar }
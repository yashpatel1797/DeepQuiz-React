import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useTheme } from 'context';
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="nav-bar">
            <div className="nav-section">
                <div className="nav-logo">
                    <Link to="" className="logo-title fn-size-l">
                        <span>DeepQuiz</span>
                    </Link>
                </div>
            </div>
            <div className="nav-search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for product"
                />
                <Link to="" className="btn btn-search">
                    <span className="material-icons"> search </span>
                </Link>
            </div>
            <button className="btn btn-toggle" onClick={toggleTheme}>
                <span className="material-icons" id="light_mode"> {theme === "dark" ? "light_mode" : "dark_mode"} </span>
            </button>
            <div className="nav-user">
                <Link to="" className="btn nav-user-btn">
                    <span className="material-icons"> person </span>
                    <span>Login</span>
                </Link>
            </div>
        </nav>
    )
}

export { Navbar }
import React, {useState, useReducer, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <nav className="header">
            <Link to="/">HomePage</Link>  
            
             <Link to="/bio">Bio</Link>  

             <a href="http://github.com/LucasOmstead" target="_blank">Github</a>  

             <Link to="/githubapi">Github API</Link>

             <Link to="/test"> TestPage </Link>

        </nav>
    );
}

export default Header;
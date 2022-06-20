import React, {useState, useReducer, useRef, useEffect } from 'react';
import Header from './Header.js';
import './other.css';
function Github() {
    return (
        <div className="main">
            <Header />
            <p> Github link: <a href="https://github.com/LucasOmstead">LucasOmstead</a> </p>
        </div>
    );
}


export default Github;
import React, {useState, useReducer, useRef, useEffect } from 'react';
import Header from './Header.js';
import './other.css';
function Bio() {
    return (
        <div className="main">
            <Header />
            <p> About me: </p>
            <p> *Bio placeholder*</p>
        </div>
    );
}

export default Bio;
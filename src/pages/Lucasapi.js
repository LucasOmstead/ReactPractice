import { render } from '@testing-library/react';
import React, {useState, useReducer, useEffect, useRef} from 'react';
import Header from './Header.js';
import './other.css';
function Githubapi() {





    useEffect(() => {
        fetch(`http://api.github.com/users/lucasomstead`) //can take a second param of an object for additional settings
        //ex. method: "GET"
            .then((response) => response.json()) //autoreturn only if no block
            .then(data => document.getElementById("lucasData").innerHTML=(JSON.stringify(data, null, 2))); //shorthand: .then(setData), .then implicitly calls the function with the arguments passed into it
    }, []);
    

   
    

    return (
        <div className="main">
            <h1> My Github Account: </h1>
            <pre id="lucasData"> HELLO WORLD  </pre>
        </div>
    );
}

export default Githubapi;

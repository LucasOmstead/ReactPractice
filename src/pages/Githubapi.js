import { render } from '@testing-library/react';
import React, {useState, useReducer, useEffect, useRef} from 'react';
import Header from './Header.js';
import {Outlet, Link, useLocation} from 'react-router-dom';
import './other.css';
function Githubapi() {
    const location = useLocation();
    const [linkText, setLinkText] = useState("My github API info");
    const [data, setData] = useState(null);
    const [user, setUser] = useState("lucasomstead");
    const userInput = useRef();

    useEffect(() => {
        fetch(`http://api.github.com/users/${user}`) //can take a second param of an object for additional settings
        //ex. method: "GET"
            .then((response) => response.json()) //autoreturn only if no block
            .then(data => setData(JSON.stringify(data, null, 2))); //shorthand: .then(setData), .then implicitly calls the function with the arguments passed into it
    }, [user]);
    

    const submit = (e) => {
        e.preventDefault();
        setUser(userInput.current.value);
        userInput.current.value="";
    }
    
    useEffect(() => {
        if (location.pathname === "/githubapi/lucas") {
            setLinkText("");
        } else {
            setLinkText("My github API info");
        }
    }, [location.pathname]);

    

    return (
        <div className="main">
            <Header />
            <form onSubmit={submit}>
            <input 
                ref={userInput}
                type="text"
                placeholder="Input user here:"
            />
            <button type="submit">Submit</button>
            </form>
            <pre id="dataPRE"> {data} </pre>
            <Link id="linktogithub" to="lucas"> {linkText} </Link>

            <Outlet />
        </div>
    ); //location="pathname" ? "" : "Link to my github", also use state and update it when link clicked (onclick)
    //Remember, re-renders only when STATE is changed - NOT when a variable in JSX is changed
}

export default Githubapi;

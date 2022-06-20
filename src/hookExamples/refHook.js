/*
import logo from './logo.svg';
import '../App.css';
import { render } from '@testing-library/react';

import React, {useState, useReducer, useEffect, useRef} from 'react';

function App() {
  
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault(); //prevents the form from automatically reloading the page and clearing fields
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value="Title:";
    hexColor.current.value="#000000";
  }

  return(
    <form onSubmit={submit}>
      <input 
        ref={txtTitle}
        type="text"
        placeholder="Title:"
      />
      <input 
        ref={hexColor}
        type="color"
        placeholder="#000000"
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

useRef tracks the thing it's referring to, and can do things like preventing the default behaviour of it and getting 
& setting its value




useEffect(function to be called, [] of variables when it'll be called);


export default App;

*/
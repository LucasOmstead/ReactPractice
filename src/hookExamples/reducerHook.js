/*import logo from './logo.svg';
import '../App.css';
import { render } from '@testing-library/react';

import React, {useState, useReducer} from 'react';

function App() {
  
  const [meals, setMeals] = useReducer((stat, food) => {
    stat.push(food);
    document.getElementById("thingy").innerHTML = stat;
    return stat;
  }, ["pasta", "lasagna"]);


  return(
    <div>
      
      <h1 id="thingy"> j </h1>
      <button onClick={()=>{setMeals("pizza")}}> Add pizza </button>
    </div>
  );
}

onClick={} - calls the function in parentheses (just a function, so if calling a function with params use ()=>myfunction(params))
useReducer - first argument is automatically the current state, second is whatever is passed

export default App;
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.js';
import Bio from './pages/Bio.js';
import Github from './pages/Github.js';
import Githubapi from './pages/Githubapi.js';
import Lucasapi from './pages/Lucasapi.js';
import TestPage from './pages/TestPage.js'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/github" element={<Github />} />
            <Route path="/githubapi"element={<Githubapi />}>
                <Route path="lucas" element={<Lucasapi />} /> 
            </Route>
            <Route path="/test" element={<TestPage />} />
        </Routes>

    </BrowserRouter>


);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

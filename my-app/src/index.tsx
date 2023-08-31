import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetDataFromApi from './components/GetDataFromApi';
import Style from './components/Style';
import HooksConcept from './components/HooksConcepts'
import Home from './components/Home';
import HookContext from './components/HookContext'
import HookRef from './components/HookRef';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/style' element={<Style />} />        
        <Route path='/hooks' element={<HooksConcept />} />
        <Route path='/hookContext' element={<HookContext />} />
        <Route path='/hookRef' element={<HookRef />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AllDegrees from './pages/AllDegrees';

 function Links() { 

   return(

 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App />} > {/*this is the root and will always be present in every pag*/}
 <Route path="/degrees" element={<AllDegrees />} />
 </Route>
 </Routes>
 </BrowserRouter>

 );
 }
 export default Links;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Links />
  </React.StrictMode>
);

reportWebVitals();

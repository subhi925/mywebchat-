import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';


const App = () => {
  return (
  <div className="grid-container">
 
      <Router>
      <Header/>
       <div className="mainM">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes> 

       </div>

       <div className="footerM"><Footer/></div>
     </Router>
        
    </div>
  )
}

export default App
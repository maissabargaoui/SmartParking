import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'



import Header from './components/header/Header'
import Body from './components/body/Body'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header>
        <Body>

        </Body>
      </Header>
      
    </div> 
    </Router>
  );
}
  
export default App;

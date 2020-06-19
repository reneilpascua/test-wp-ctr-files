import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import logo from './logo.svg';
import ToosieSlide from './components/ToosieSlide';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/toosie" component={ToosieSlide}/>
          <Route exact path="/react-page" component={ToosieSlide}/>
          <Route exact path="/react-page/build-files" component={ToosieSlide}/>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

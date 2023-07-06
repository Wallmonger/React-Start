import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';
import Car from './components/Cars';

// Component 1
class App extends Component {

  render() {
    return (
      <div className="App">
          <Mycars />
          <Car />
      </div>
    );
  }

}

export default App;

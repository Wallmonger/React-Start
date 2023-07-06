import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';


// Component 1
class App extends Component {

  state = {
    title: 'Voiture gratuite'
  }

  render() {
    return (
      <div className="App">
          { /* J'envoie mon props dans mon composant, il sera alors accessible en tant que props */}
          <Mycars title={this.state.title}/>
      </div>
    );
  }

}

export default App;

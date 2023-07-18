import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';


// Component 1
class App extends Component {

  state = {
    title: 'Mon catalogue voiture 2',
    color: 'green'
  }

  changeTitle = (e) => {
      this.setState({
        title : 'Mon nouveau titre'
      })    
  }

  changeViaParam = (newTitle) => {
    // Using setState allow react to automatically detect any change and reload the render() method
    this.setState({
      title : newTitle
    })
  }

  changeViaBind = (param) => {
    this.setState({
      title : param
    })
  }

  changeViaInput = (e) => {
    this.setState({
      title : e.target.value
    })
  }


  render() {
    return (
      <div className="App">
          { /* J'envoie mon props dans mon composant, il sera alors accessible en tant que props */}
          <Mycars title={this.state.title} color={this.state.color}/>
          <button onClick={this.changeTitle}>Changer le nom en dur</button>
          <button onClick={() => this.changeViaParam('Parameter')}>Parameter</button>
          <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Via bind</button>
          <input type="text"onChange={this.changeViaInput} value={this.state.title}/>
      </div>
    );
  }

}

export default App;

import logo from './logo.svg';
import './App.css';

// Component 1
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sympa <code>le petit</code> JSX.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          C'est parti !
        </a>
      </header>
    </div>
  );
}

export default App;

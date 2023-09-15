import logo from './images/dark-logo.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Cascades Intelligence Associates
          </p>
        </header>
      </div>
      <div className="Container">
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;

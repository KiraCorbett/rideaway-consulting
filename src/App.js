import logo from './images/dark-logo.png';
import './App.css';
import Container from './components/Container';

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
      <Container />
      <Container />
      <Container />
    </div>
  );
}

export default App;

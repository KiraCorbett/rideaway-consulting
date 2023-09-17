import logo from './images/dark-logo.png';
import './App.css';
import Container from './components/Container';

function App() {
  const ColumnContainer = () => <Container style={{flexDirection: "column"}} />;
  const RowContainer = () => <Container style={{flexDirection: "row"}} />;

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
      <ColumnContainer />
      <ColumnContainer />
      <RowContainer />
    </div>
  );
}

export default App;

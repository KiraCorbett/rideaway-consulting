import logo from '../images/dark-logo.png';
import './Container.css';

function Container() {
  return (
    <div className="Container">
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Container;
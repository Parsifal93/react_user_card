import logo from './components/Avatar/avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Name">
        Jhon Doe
        </p>
        </header>
        {/* <main className="Info">
          <p className="Text-info">
            I Am Web Devloper. I Love To Designed New User-Interface And Make Responsive In All Views.
          </p>
          <a className="link" href="#">Massage</a>
          <a className="link2" href="#">Follwing</a>
        </main> */}
    </div>
  );
}

export default App;

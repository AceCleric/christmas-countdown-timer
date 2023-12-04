import './App.css';
import ChristmasCountDown from './components/ChristmasCountDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "50%" }}>
          <div style={{ height: "0", paddingBottom: "66.66666666666666%", position: "relative", width: "100%" }}>
            <iframe title= "christmasTime" allowfullscreen="" frameBorder="0" src="https://giphy.com/embed/LzIg4hVdQADA7m2sfK/video" style={{ left: "0", position:"absolute", top:"0", width: "100%", height: "100%" }}></iframe>
          </div>
        </div>

        <ChristmasCountDown />
      </header>
    </div>
  );
}

export default App;

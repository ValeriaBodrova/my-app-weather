
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Weather defaultCity="Kyiv"/>
      <div className="footer m-3">
    <a href="https://github.com/ValeriaBodrova/my-app-weather">Open-soursed</a> by <a href="https://bucolic-bubblegum-022291.netlify.app/">Valeria Bodrova</a> from <a href="https://www.shecodes.io/">SheCodes</a>
    </div>
      </header>
    </div>
  );
}

export default App;

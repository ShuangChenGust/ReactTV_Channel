import "./App.css";
import Row from "./Components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>React TV Demo</h1>
      <h2>On Demand</h2>
      <Row title="Most pupolar" fetchUrl={requests.fetchNetflexOriginals} />
      <Row title="Trendign now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

import "./App.css";
import Row from "./Components/Row";
import requests from "./request";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <h1>React TV Demo</h1>
      <h2>On Demand</h2>
      {/* <Nav>*/}
      <Banner />
      <Row
        title="Most pupolar"
        fetchUrl={requests.fetchNetflexOriginals}
        isLargeRow={true}
      />
      <Row title="Trendign now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentarie} />
    </div>
  );
}

export default App;

import "./App.css";
import ListHeader from "./components/ListHeader";
import ChannelList from "./components/ChannelList";
import data from "./channels.json";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src="/img/favicon-white.svg" alt="logo" />
            <h4>Free Live Channels</h4>
          </div>
        </nav>
      </header>
      
      <main>
        <ListHeader channels={data}/>
        <ChannelList channels={data} />
      </main>
    </div>
  );
}

export default App;

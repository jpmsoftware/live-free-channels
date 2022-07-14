import './App.css';
import { Link } from 'react-router-dom';
import ChannelList from './components/ChannelList';

function App() {
  return (
    <div className="App">
      <header>
        <div className='wrapper'>
          <div className='logo'>
            <img src="/img/tv.svg" alt="logo" />
            <h4>Free Streaming Channels</h4>
          </div>

          <button className='btn-info'>
            <Link to="/info">Info</Link>
          </button>
        </div>
      </header>

      <main>
        <h2>Todos los canales</h2>
        <ChannelList />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Crypto from './components/Crypto';

function App() {
  const data =
  {
    "asset_id": "USDT",
    "name": "Tether",
    "price": 1.0000328932034872,
    "volume_24h": 25975971682.39115,
    "change_1h": -5.698536707989724,
    "change_24h": 6.252042693046506,
    "change_7d": -0.18818678223110588,
    "status": "recent",
    "created_at": "2021-09-21T01:53:50",
    "updated_at": "2021-10-16T14:53:41.894539"
  };

  return (
    <div className="App">
      <Header title='Crypto Data' />
      <Crypto data={data} />
    </div>
  );
}

export default App;
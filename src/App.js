import './App.css';
import Header from './components/Header';
import Crypto from './components/Crypto';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    async function retrieveData() {
      let data = await axios.get(`/assets?start=${start}`).then(res => {
        return res.data.assets;
      });

      setData(data);
    }

    retrieveData();
    window.scrollTo(0, 0);
  }, [start]);

  return (
    <div className="App">
      <Header title='Crypto Data' />
      {data.map(aCrypto => {
        return <Crypto key={aCrypto.asset_id} data={aCrypto} />
      })}
      <Footer start={start} setStart={setStart} />
    </div>
  );
}

export default App;
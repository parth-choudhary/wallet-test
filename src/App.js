import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import getGlipWallet from './wallet';

function App() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const initWallet = async () => {
      const wallet = await getGlipWallet();
      setWallet(wallet);
    };
    initWallet();
  }, []);

  return (
    <div className="App">
      <div id="glip-wallet"></div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => wallet.showConnectModal(['google'])}>modeal</button>
      </header>
    </div>
  );
}

export default App;

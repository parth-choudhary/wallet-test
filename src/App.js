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
        console.log('userinfo', await wallet.getUserInfo());
        console.log('www');
    };
    initWallet();
  }, []);

    const signTransaction = async () =>{
        let signer = await wallet.getSigner();
        let displayMessage = "This transaction transfers 0 value";
        let publicAddress = (await wallet.getUserInfo()).publicAddress;
        let signedTx = signer.signTransaction({
            to: '0x0000000000000000000000000000000000000000',
            value: '0x0',
            data: '0x0',
            chainId: 137,
            nonce: 0,
            gasPrice: 0,
            gasLimit: 0,
            from: publicAddress,
        }, displayMessage);
    }
    return (
        <div className="App">
          <div id="glip-wallet"></div>
          <header className="App-header">
            <button onClick={() => wallet.showConnectModal(['google'])}>Show Modal</button>
            <button onClick={async () => {
                const loggedOut = await wallet.logout();
                console.log('loggedOut', loggedOut);
            }}>logout</button>
            <button onClick={async () => {
                signTransaction();
            }}>Sign Example Transaction</button>
            <button onClick={async () => {
                wallet.showWallet()
            }}>Show Wallet</button>
            <button onClick={async () => {
                wallet.hideWallet()
            }}>Hide Wallet</button>
          </header>
        </div>
    );
}

export default App;

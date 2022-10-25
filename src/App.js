import "./App.css";
import Showprice from "./Showprice";
import { datetime } from "./utils";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <h1>Exchange Rate</h1>
        <h4>As of: {datetime}</h4>
        <Showprice
          exchange="USDYEN"
          urlimg="https://pngimg.com/uploads/dollar_sign/dollar_sign_PNG21539.png"
        />
        <Showprice
          exchange="BTCYEN"
          urlimg="https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG48.png"
        />
        <Showprice
          exchange="ETHYEN"
          urlimg="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023"
        />
      </div>
    </div>
  );
}

export default App;

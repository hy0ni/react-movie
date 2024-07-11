import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);
  const writeMoney = (e) => setMyMoney(e.target.value);
  const selectCoin = (e) => setGetCoin(e.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      <div>
        <input type="number" value={myMoney} onChange={writeMoney} placeholder="WRITE UR USD"></input>
      </div>

      {loading ? <strong>Loading...</strong> : null}

      <select onChange={selectCoin}>
        {coins.map((coin) =>
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name}
            ({coin.symbol}): {(coin.quotes.USD.price).toFixed(2)})USD
          </option>)}
      </select>

      <p>Coins you can buy: {getCoin > 0 ? (myMoney / getCoin).toFixed(2) : null}</p>
    </div>

  );
}

export default App;
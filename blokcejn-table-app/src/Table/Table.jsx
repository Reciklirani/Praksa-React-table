import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./table.css";

export function Table() {
  const [data, setData] = useState([]);
  const [amounts, setAmounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD",
          {
            headers: {
              Authorization: `Apikey ${process.env.REACT_APP_CRYPTO_COMPARE_API_KEY}`,
            },
          }
        );
        if (response.status == 200) {
          setData(response.data.Data);
        } else {
          throw new Error("Request was not successful");
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  if (Object.keys(data).length === 0) {
    return <p>Loading...</p>;
  }

  const updateTotalPrice = (cryptoId, value) => {
    setAmounts({
      ...amounts,
      [cryptoId]: value,
    });
  };

  const formatTotalPrice = (price) => {
    const formattedPrice = price.toPrecision(10);
    return parseFloat(formattedPrice).toString();
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Amount</th>
            <th>Price (USD)</th>
            <th>Rating</th>
            <th className="total-price-cell">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((crypto) => (
              <tr key={crypto.CoinInfo.Id}>
                <td>{crypto.CoinInfo.Name}</td>
                <td>{crypto.CoinInfo.FullName}</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) =>
                      updateTotalPrice(crypto.CoinInfo.Id, e.target.value)
                    }
                  />
                </td>
                <td>{parseFloat(crypto.RAW.USD.PRICE).toPrecision(8)}</td>
                <td>{crypto.CoinInfo.Rating.Weiss.Rating}</td>
                <td>
                  {formatTotalPrice(
                    parseFloat(crypto.RAW.USD.PRICE) *
                      parseFloat(amounts[crypto.CoinInfo.Id] || 0)
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

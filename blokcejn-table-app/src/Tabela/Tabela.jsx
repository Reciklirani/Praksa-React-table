import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export function Tabela() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD",
          {
            headers: {
              Authorization:
                "Apikey 12ca21d417cdbb777b5d950aae8cce8b4829d819f222dc0c6f6b217a9e0ffe2b",
            },
          }
        );
        if (response.status == 200) {
          // const data = response.data.Data;
          setData(response.data.Data);
          console.log(response.data);
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Price (USD)</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((crypto) => (
              <tr key={crypto.CoinInfo.Id}>
                <td>{crypto.CoinInfo.Name}</td>
                <td>{crypto.CoinInfo.FullName}</td>
                <td>{crypto.RAW.USD.PRICE}</td>
                <td>{crypto.CoinInfo.Rating.Weiss.Rating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

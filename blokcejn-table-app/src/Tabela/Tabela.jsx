import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export function Tabela() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/ditto"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching pokemon data", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <table className="tabela">
        <thead>
          <tr>
            <th>Token</th>
            <th>Količina</th>
            <th>Cena u dolarima</th>
            <th>Cena u evrima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>10</td>
            <td>$60,000</td>
            <td>50,000 €</td>
          </tr>
          <tr>
            <td>Ethereum (ETH)</td>
            <td>20</td>
            <td>$2,000</td>
            <td>1,800 €</td>
          </tr>
          <tr>
            <td>Ripple (XRP)</td>
            <td>1000</td>
            <td>$0.5</td>
            <td>0.45 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

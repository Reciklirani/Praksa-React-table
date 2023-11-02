import { useEffect, useState } from "react";

export function Tabelamock() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
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
            <td>Bitcoin</td>
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

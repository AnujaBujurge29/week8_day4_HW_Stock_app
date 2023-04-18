import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

export default function Stocks(props) {
  const params = useParams();
  const symbol = params.symbol;
  //   console.log(symbol);

  const [stock, setStocks] = useState(null);
    // <h3>This is Stocks Component</h3>
  if (stock === null) {
    data.map((each) => {
      if ((each.symbol = symbol)) {
        setStocks(each);
      }
    });
  }
  if (stock !== null)
    return (
      <div>
        <table className="stocktable">
            <tbody>
          <tr>
            <td>Name: </td>
            <td>{stock.name}</td>
          </tr>
          <tr>
            <td>Last Price: </td>
            <td>{stock.lastPrice}</td>
          </tr>
          <tr>
            <td>Change: </td>
            <td>{stock.change}</td>
          </tr>
          <tr>
            <td>High: </td>
            <td>{stock.high}</td>
          </tr>
          <tr>
            <td>Low: </td>
            <td>{stock.low}</td>
          </tr>
          <tr>
            <td>Open Price: </td>
            <td>{stock.open}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
}

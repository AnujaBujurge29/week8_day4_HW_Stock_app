import data from "../data";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <h3>This is Dashboard</h3>
      <table className="stocktable">
        {/* <thead> */}
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Changes</th>
          </tr>
        {/* </thead> */}
        {data.map((element) => {
          const { name, lastPrice, change, symbol } = element;
          return (
            <>
              
              {/* <tbody> */}
                <tr>
                  <Link to={`/Stocks/${symbol}`}>
                    <td>{name}</td>
                  </Link>
                  <td>{lastPrice}</td>
                  <td> {change}</td>
                </tr>
              {/* </tbody> */}
              
            </>
          );
        })}
      </table>
    </div>
  );
}

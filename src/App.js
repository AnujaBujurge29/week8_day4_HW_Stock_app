import {Route, Routes} from "react-router-dom"
import './App.css';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Stocks from "./Pages/Stocks";
import Dashboard from "./Pages/Dashboard";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      {/* <h3>This is App component</h3> */}
      <Nav/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Stocks/:symbol' element={<Stocks/>}></Route>
        <Route path='/Stocks' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
// import data from "../data";

export default function Nav (){
    return(
        <div className="nav">
            <Link to='Home'>
                <div>Home</div>
            </Link>
            <Link to='About'>
                <div>About</div>
            </Link>
            <Link to='Stocks'>
                <div>Dashboard </div>
            </Link>
           {/* <Link to='Stocks'>
                <div>Stocks </div>
            </Link> */}
            
        </div>
    )
}
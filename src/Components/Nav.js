import React from "react";
import { Link } from "react-router-dom";


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
                <div>iStocks</div>
            </Link>
            
        </div>
    )
}
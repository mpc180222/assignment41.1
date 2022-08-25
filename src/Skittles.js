import React from "react";
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

function Skittles() {

    return(
        <div>
            <h1>Skittles</h1>
            <Link to = "/">Back to vending machine</Link>
        </div>
    )
}

export default Skittles;
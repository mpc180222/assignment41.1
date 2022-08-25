import React from "react";
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

function Chocolate() {

    return(
        <div>
            <h1>Chocolate</h1>
            <Link to = "/">Back to vending machine</Link>
        </div>
    )
}

export default Chocolate;
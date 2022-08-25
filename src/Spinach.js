import React from "react";
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

function Spinach() {

    return(
        <div>
            <h1>Spinach</h1>
            <Link to = "/">Back to vending machine</Link>
        </div>
    )
}

export default Spinach;
import React, { Component } from 'react';
import { Link } from 'react-router';

const App = (props) => {
    return (
        <div className="container">
            <ul className="navbar nav">
                <li>
                    <Link to={'/mass'} activeClassName="active">Mass</Link>
                </li>
                <li>
                    <Link to={'/distances'} activeClassName="active">Distances</Link>
                </li>
                <li>
                    <Link to={'/currencies'} activeClassName="active">Currencies</Link>
                </li>
            </ul>
            <div className="content">
                <div>{props.children || 'Welcome to Converter!'}</div>
            </div>
        </div>
    )
};

export default App;
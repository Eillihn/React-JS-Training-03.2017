import React, { Component } from 'react';
import Link from './Link';

const NavBar = () => (
    <ul className="navbar nav">
        <li>
            <Link to="/mass" activeClassName="active" title="Mass"/>
        </li>
        <li>
            <Link to="/distances" activeClassName="active" title="Distances"/>
        </li>
        <li>
            <Link to="/currencies" activeClassName="active" title="Currencies"/>
        </li>
        <li>
            <Link to="/log" activeClassName="active" title="Log"/>
        </li>
    </ul>
);

export default NavBar;
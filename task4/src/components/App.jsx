import React, { Component } from 'react';
import { Link } from 'react-router';
import { ConverterConst } from 'constants';
import { NavBar } from 'components';

const App = (props) => (
    <div className="container">
        <NavBar />
        <div className="content">
            {props.children || 'Welcome to Converter!'}
        </div>
    </div>
);

export default App;
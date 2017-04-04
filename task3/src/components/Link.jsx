import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';

const Link = ({ to, activeClassName, onClick, title }) => (
    <RouterLink
        to={to}
        activeClassName={activeClassName}
        onClick={onClick}>
        {title}
    </RouterLink>
);

export default Link;
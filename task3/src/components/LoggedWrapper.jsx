import React, { Component } from 'react';
import ToggledContent from './ToggledContent';
import { Log } from 'containers';

const LoggedWrapper = (props) => (
    <div>
        {props.children}
        <ToggledContent title="Log">
            <Log />
        </ToggledContent>
    </div>
);

export default LoggedWrapper;
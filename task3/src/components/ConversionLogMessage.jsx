import React, { Component } from 'react';
import { ConverterConst } from 'constants';

const ConversionLogMessage = ({
    timestamp,
    conversion: { from, to, value, result, rate, type },
    color
}) => (
        <div style={{ backgroundColor: color }} className="message">
            {`
                Format [${new Date(timestamp).toLocaleString()}]: 
                ${value}${from} => ${result}${to} 
                ${type === ConverterConst.CURRENCIES_TYPE_NAME ? '| by rate: ' + rate : ''}
            `}
        </div>
    );

export default ConversionLogMessage;
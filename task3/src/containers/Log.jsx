import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConversionLogMessage } from 'components';
import UndoRedo from './UndoRedo';

let Log = ({ logger }) => (
    <div className="section">
        <UndoRedo />
        {logger.map(msg => <ConversionLogMessage key={msg.id} {...msg} />)}
    </div>
);

const mapStateToProps = (state) => ({
    logger: state.logger.present
});

Log = connect(mapStateToProps)(Log);

export default Log;
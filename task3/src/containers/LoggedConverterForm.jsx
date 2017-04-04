import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ConverterForm } from 'components/converter';
import { addLogMessage } from 'actions';

const mapDispatchToProps = (dispatch) => ({
    addLogMessage: (msg) => dispatch(addLogMessage(msg))
});

const LoggedConverterForm = connect(null, mapDispatchToProps)(ConverterForm);

export default LoggedConverterForm;
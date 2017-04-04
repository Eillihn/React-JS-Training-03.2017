import React, { Component } from 'react';
import { LoggedConverterForm } from 'containers';
import { UnitsService } from './UnitsService';
import { ConverterConst } from 'constants';

const Mass = () => (
    <div>
        <LoggedConverterForm type={ConverterConst.MASS_TYPE_NAME}
            units={new UnitsService().getUnits(ConverterConst.MASS_TYPE_NAME)} />
    </div>
);

export default Mass;
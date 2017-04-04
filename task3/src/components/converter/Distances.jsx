import React, { Component } from 'react';
import { LoggedConverterForm } from 'containers';
import { UnitsService } from './UnitsService';
import { ConverterConst } from 'constants';

const Distances = () => (
    <div>
        <LoggedConverterForm type={ConverterConst.DISTANCES_TYPE_NAME}
            units={new UnitsService().getUnits(ConverterConst.DISTANCES_TYPE_NAME)} />
    </div>
);

export default Distances;
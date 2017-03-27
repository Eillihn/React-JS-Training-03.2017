import React, { Component } from 'react';
import ConversionForm from './ConversionForm';
import { UnitsService } from 'converter/UnitsService';

const MASS_TYPE_NAME = "mass";

class Mass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            units: new UnitsService().getUnits(MASS_TYPE_NAME)
        };
    }

    render() {
        return (
            <div>
                <ConversionForm type={MASS_TYPE_NAME} units={this.state.units} />
            </div>
        );
    }
};

export default Mass;
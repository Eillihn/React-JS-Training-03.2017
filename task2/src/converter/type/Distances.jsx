import React, { Component } from 'react';
import ConversionForm from './ConversionForm';
import { UnitsService } from 'converter/UnitsService';

const DISTANCES_TYPE_NAME = "distances";

class Distances extends Component {

    constructor(props) {
        super(props);

        this.state = {
            units: new UnitsService().getUnits(DISTANCES_TYPE_NAME)
        };
    }

    render() {
        return (
            <div>
                <ConversionForm type={DISTANCES_TYPE_NAME} units={this.state.units}/>
            </div>
        );
    }
};

export default Distances;
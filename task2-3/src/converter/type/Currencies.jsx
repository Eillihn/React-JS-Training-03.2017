import React, { Component } from 'react';
import ConversionForm from './ConversionForm';
import AddCustomRate from 'converter/actions/add-rate/AddCustomRate';
import { UnitsService } from 'converter/UnitsService';

const CURRENCIES_TYPE_NAME = "currencies";

class Currencies extends Component {

    constructor(props) {
        super(props);

        this.unitsService = new UnitsService();

        this.state = {
            units: this.unitsService.getUnits(CURRENCIES_TYPE_NAME)
        };
        this.updateUnitsHandler = this.updateUnitsHandler.bind(this);
    }

    updateUnitsHandler() {
        this.setState({
            units: this.unitsService.getUnits(CURRENCIES_TYPE_NAME)
        });
    }

    render() {
        return (
            <div>
                <ConversionForm type={CURRENCIES_TYPE_NAME} units={this.state.units} />
                <AddCustomRate type={CURRENCIES_TYPE_NAME} updateUnitsHandler={this.updateUnitsHandler} />
            </div>
        );
    }
};

export default Currencies;
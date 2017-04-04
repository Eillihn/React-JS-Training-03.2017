import React, { Component } from 'react';
import { LoggedConverterForm } from 'containers';
import AddCustomRate from './custom-rate/AddCustomRate';
import { UnitsService } from './UnitsService';
import { ConverterConst } from 'constants';


class Currencies extends Component {

    constructor(props) {
        super(props);

        this.unitsService = new UnitsService();

        this.state = {
            units: this.unitsService.getUnits(ConverterConst.CURRENCIES_TYPE_NAME)
        };
        this.updateUnitsHandler = this.updateUnitsHandler.bind(this);
    }

    updateUnitsHandler() {
        this.setState({
            units: this.unitsService.getUnits(ConverterConst.CURRENCIES_TYPE_NAME)
        });
    }

    render() {
        return (
            <div>
                <LoggedConverterForm type={ConverterConst.CURRENCIES_TYPE_NAME}
                    units={this.state.units} />
                <AddCustomRate
                    type={ConverterConst.CURRENCIES_TYPE_NAME}
                    updateUnitsHandler={this.updateUnitsHandler} />
            </div>
        );
    }
};


export default Currencies;
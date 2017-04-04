import './converter.less';
import React, { Component } from 'react';
import { MeasurementUnitsConverter } from 'converter/actions/convert/MeasurementUnitsConverter';

class ConversionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            from: props.units[0].name,
            to: props.units[1].name,
            result: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getOptions() {
        return this.props.units.map(unit => <option value={unit.name} key={unit.id}>{unit.name}</option>);
    }

    render() {
        const options = this.getOptions();
        const converter = MeasurementUnitsConverter.createConverter({
            from: this.state.from,
            to: this.state.to
        });
        const result = converter.convert(this.state.value);

        return (
            <table className="converter">
                <tbody>
                    <tr>
                        <td className="from">
                            <input name="value" className="form-control" value={this.state.value}
                                onChange={this.handleChange} />
                        </td>
                        <td className="equal">=</td>
                        <td className="result">
                            {result}
                        </td>
                    </tr>
                    <tr>
                        <td className="from">
                            <select className="form-control" name="from" value={this.state.from}
                                onChange={this.handleChange}>
                                {options}
                            </select>
                        </td>
                        <td></td>
                        <td className="to">
                            <select className="form-control" name="to" value={this.state.to}
                                onChange={this.handleChange}>
                                {options}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
;

export default ConversionForm;
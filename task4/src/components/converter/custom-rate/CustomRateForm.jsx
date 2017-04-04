import './custom-rate-form.less';
import React, { Component } from 'react';
import { UnitsService } from '../UnitsService';

const CONVERSION_NAME_PATTERN = /^(\w)+$/;

class CustomRateForm extends Component {

    constructor(props) {
        super(props);
        this.unitsService = new UnitsService();
        this.state = {
            rate: '',
            from: '',
            to: '',
            isValid: false
        };
        this.addHandler = this.addHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.isValid !== this.state.isValid;
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.validate());
    }

    addHandler() {
        if (this.validate()) {
            this.unitsService.addRate({
                rate: Number.parseFloat(this.state.rate),
                from: this.state.from,
                to: this.state.to,
                type: this.props.type
            });
            this.props.backHandler();
        }
    }

    validate() {
        const isValid = this.isValidNumber(this.state.rate) && this.isValidName(this.state.from) && this.isValidName(this.state.to);

        this.setState({
            isValid
        });

        return isValid;
    }

    isValidNumber(num) {
        const floatNum = Number.parseFloat(num);
        return !Number.isNaN(floatNum);
    }

    isValidName(name) {
        return CONVERSION_NAME_PATTERN.test(name);
    }

    render() {
        return (
            <div className="custom-rate-form">
                <div className="container">
                    <div className="row">
                        <button className="btn" onClick={this.props.backHandler}>Go Back</button>
                    </div>
                    <div className="row">
                        <input className="form-control" name="from" placeholder="from" onChange={this.handleChange} />
                    </div>
                    <div className="row">
                        <input className="form-control" name="to" placeholder="to" onChange={this.handleChange} />
                    </div>
                    <div className="row">
                        <input className="form-control" name="rate" placeholder="rate" onChange={this.handleChange} />
                    </div>
                    <div className="row">
                        <button className="btn" onClick={this.addHandler} disabled={!this.state.isValid}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default CustomRateForm;
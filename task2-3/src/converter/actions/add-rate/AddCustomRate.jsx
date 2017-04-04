import React, { Component } from 'react';
import CustomRateForm from './CustomRateForm';

class AddCustomRate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formIsVisible: false
        };

        this.backHandler = this.backHandler.bind(this);
        this.showFormHandler = this.showFormHandler.bind(this);
    }

    backHandler() {
        this.setState({ formIsVisible: false });
        this.props.updateUnitsHandler();
    }

    showFormHandler() {
        this.setState({ formIsVisible: true });
    }

    getForm() {
        return <CustomRateForm type={this.props.type} backHandler={this.backHandler} />;
    }

    render() {
        const form = this.state.formIsVisible ? this.getForm() : '';

        return (
            <div>
                <div className="row">
                    <button className="btn" onClick={this.showFormHandler}>Add Custom Rate</button>
                </div>
                <div>{form}</div>
            </div>
        );
    }
};

export default AddCustomRate;
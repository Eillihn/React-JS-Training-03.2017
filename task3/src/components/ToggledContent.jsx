import React, { Component } from 'react';
import { Link } from 'react-router';

class ToggledContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentIsVisible: false
        };
    }

    render() {
        return (
            <div className="section">
                <hr />
                <label>
                    <span className="title">
                        {this.state.contentIsVisible ? 'Hide' : 'Show'} {this.props.title}
                    </span>
                    <input className="checkbox" type="checkbox" 
                        onChange={e => this.setState({ contentIsVisible: e.target.checked })} />
                </label>
                {this.state.contentIsVisible && this.props.children}
            </div>
        );
    }
}

export default ToggledContent;
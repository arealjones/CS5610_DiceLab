
import React from 'react';
import './index.css';

export default class Button extends React.Component {

    render() {
        return (
            <button className={this.props.styleClass} onClick={() => this.props.func()}>{this.props.text}</button>
        )
    }
}

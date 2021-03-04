import React from 'react';
import './index.css';

export default class Dice extends React.Component {

    render() {
        return (
            <div className="dice">
                <p className="dice-text">{this.props.number}</p>
            </div>
        )
    }
}

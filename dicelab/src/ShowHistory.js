import React from 'react';
import Dice from './Dice';

export default class ShowHistory extends React.Component {

    render() {
        return (
            <div className="dice-container"> 
            {
                this.props.history.map((dice, index) => {
                    return (
                        <Dice key={index} number={dice}></Dice>
                    )
                }
                )

            }
        </div>
        )
    }
}

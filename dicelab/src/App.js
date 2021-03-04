import React from 'react';
import ShowHistory from './ShowHistory';
import Button from './Button';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: [],
        }
    }

    generateRandomDice() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        this.setState({
            history: this.state.history.concat(randomNumber)
        });
        return randomNumber;
    }

    clearHistory() {
        this.setState({
            history: [],
        })
    }

    render() {
        return (
            <div>
                <Button styleClass={"roll"} func={() => this.generateRandomDice()} text={"Roll Dice"}/>
                <Button styleClass={"clear"} func={() => this.clearHistory()} text={"Clear History"}/>
                <ShowHistory history={this.state.history}/>
            </div>
        )
    }
}

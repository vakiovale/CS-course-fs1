import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            pisteet: [ 0, 0, 0, 0, 0, 0 ]
        }
    }

    randomAnecdote = () => {
        return () => {
            const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
            console.log("Random anecdote: ", (randomAnecdoteIndex + 1));
            this.setState({ selected: randomAnecdoteIndex });
        }
    }

    voteAnecdote = () => {
        return () => {
            console.log("Voted anecdote ", this.state.selected);
            const uudetPisteet = this.state.pisteet;
            uudetPisteet[this.state.selected] = uudetPisteet[this.state.selected] + 1;
            this.setState({ pisteet: uudetPisteet });
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>Anecdote has {this.state.pisteet[this.state.selected]} points</p>
                <Button handleClick={this.voteAnecdote()} text="Vote" />
                <Button handleClick={this.randomAnecdote()} text="Next anecdote" />
                <Leaderboard points={this.state.pisteet} />
            </div>
        )
    }
}

const Leaderboard = ({ points }) => {
    let bestIndex = points.indexOf(Math.max(...points));
    return (
        <div>
            <h2>Anecdote with most votes:</h2>
            <p>{anecdotes[bestIndex]}</p>
            <p>Has {points[bestIndex]} votes</p>
        </div>
    )
}


const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
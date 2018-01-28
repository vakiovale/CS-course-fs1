import React from 'react'
import ReactDOM from 'react-dom'

const Statistiikka = ({ palaute }) => {
    return (
        <div>
            <h2>Statistiikka</h2>
            <p>hyvä {palaute.hyvaPalaute}</p>
            <p>neutraali {palaute.neutraaliPalaute}</p>
            <p>huono {palaute.huonoPalaute}</p>
        </div>
    )
}

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button> 
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyvaPalaute: 0,
            neutraaliPalaute: 0,
            huonoPalaute: 0
        }
    }

    hyvaPalaute = () => {
        this.setState({ hyvaPalaute: this.state.hyvaPalaute + 1 });
        console.log(this.state.hyvaPalaute);
    }

    neutraaliPalaute = () => {
        this.setState({ neutraaliPalaute: this.state.neutraaliPalaute + 1 });
        console.log(this.state.neutraaliPalaute);
    }

    huonoPalaute = () => {
        this.setState({ huonoPalaute: this.state.huonoPalaute + 1 });
        console.log(this.state.huonoPalaute);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button handleClick={this.hyvaPalaute} text="Hyvä" />
                    <Button handleClick={this.neutraaliPalaute} text="Neutraali" />
                    <Button handleClick={this.huonoPalaute} text="Huono" />
                </div>
                <Statistiikka palaute={this.state} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
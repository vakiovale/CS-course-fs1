import React from 'react'
import ReactDOM from 'react-dom'

const Statistiikka = ({ palaute }) => {
    return (
        <div>
            <h2>Statistiikka</h2>
            <Yhteenveto palaute={palaute} />
            <PalauteKeskiarvo palaute={palaute} />
            <Positiivinen palaute={palaute} />
        </div>
    )
}

const Yhteenveto = ({ palaute }) => {
    return (
        <div>
            <p>hyvä {palaute.hyva}</p>
            <p>neutraali {palaute.neutraali}</p>
            <p>huono {palaute.huono}</p>
        </div>
    )
}

const PalauteKeskiarvo = ({ palaute }) => {
    const keskiarvo = ((palaute.hyva * 1) + (palaute.huono*(-1))) 
    / (palaute.hyva + palaute.neutraali + palaute.huono);
    
    return (
        <div>
            <p>keskiarvo {Number(keskiarvo).toFixed(2)}</p>
        </div>
    )
}

const Positiivinen = ({ palaute }) => {
    const positiivisia = (palaute.hyva) 
    / (palaute.hyva + palaute.neutraali + palaute.huono);

    return (
        <div>
            <p>positiivisia {Number(100 * positiivisia).toFixed(1)} %</p>
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
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    hyvaPalaute = () => {
        this.setState({ hyva: this.state.hyva + 1 });
        console.log(this.state.hyva);
    }

    neutraaliPalaute = () => {
        this.setState({ neutraali: this.state.neutraali + 1 });
        console.log(this.state.neutraali);
    }

    huonoPalaute = () => {
        this.setState({ huono: this.state.huono + 1 });
        console.log(this.state.huono);
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
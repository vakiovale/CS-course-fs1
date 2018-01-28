import React from 'react'
import ReactDOM from 'react-dom'

const Statistiikka = ({ palaute }) => {
    const eiPalautetta = palaute.hyva + palaute.neutraali + palaute.huono === 0;

    if(eiPalautetta) {
        return (
            <div>
                <h2>Statistiikka</h2>
                <p>Ei palautetta</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Statistiikka</h2>
                <Yhteenveto palaute={palaute} />
                <PalauteKeskiarvo palaute={palaute} />
                <Positiivinen palaute={palaute} />
            </div>
        )
    }
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

    annaPalautetta = (palaute) => {
        return () => {
            this.setState({ [palaute]: this.state[palaute] + 1 });
            console.log(this.state[palaute]);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button handleClick={this.annaPalautetta('hyva')} text="Hyvä" />
                    <Button handleClick={this.annaPalautetta('neutraali')} text="Neutraali" />
                    <Button handleClick={this.annaPalautetta('huono')} text="Huono" />
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
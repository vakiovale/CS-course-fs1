import React from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ palaute }) => {
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
                <table>
                    <tbody>
                        <Yhteenveto nimi="Hyvä" palaute={palaute.hyva} />
                        <Yhteenveto nimi="Neutraali" palaute={palaute.neutraali} />
                        <Yhteenveto nimi="Huono" palaute={palaute.huono} />
                        <PalauteKeskiarvo palaute={palaute} />
                        <Positiivinen palaute={palaute} />
                    </tbody>
                </table>
            </div>
        )
    }
}

const Statistic = ({ nimi, arvo}) => {
    return (
        <tr>
            <td>{nimi}</td>
            <td>{arvo}</td>
        </tr>
    )
}

const Yhteenveto = ({ nimi, palaute }) => {
    return (
        <Statistic nimi={nimi} arvo={palaute} />
    )
}

const PalauteKeskiarvo = ({ palaute }) => {
    const keskiarvo = ((palaute.hyva * 1) + (palaute.huono*(-1))) 
    / (palaute.hyva + palaute.neutraali + palaute.huono);
    
    return (
        <Statistic nimi="keskiarvo" arvo={Number(keskiarvo).toFixed(2)} />
    )
}

const Positiivinen = ({ palaute }) => {
    const positiivisia = (palaute.hyva) 
    / (palaute.hyva + palaute.neutraali + palaute.huono);

    const arvo = Number(100 * positiivisia).toFixed(1) + " %";

    return (
        <Statistic nimi="positiivisia" arvo={arvo} />
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
                <Statistics palaute={this.state} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    const nimi = props.kurssi.nimi
    return (
        <h1>{nimi}</h1>
    )
}

const Sisalto = (props) => {
    const osat = props.kurssi.osat
    return (
        <div>
            <Osa nimi={osat[0].nimi} tehtavienLukumaara={osat[0].tehtavia} />
            <Osa nimi={osat[1].nimi} tehtavienLukumaara={osat[1].tehtavia} />
            <Osa nimi={osat[2].nimi} tehtavienLukumaara={osat[2].tehtavia} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavienLukumaara}</p>
    )
}

const Yhteensa = (props) => {
    const osat = props.kurssi.osat
    return (
        <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }   

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
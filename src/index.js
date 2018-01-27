import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa nimi={props.osa1.nimi} tehtavienLukumaara={props.osa1.tehtavia} />
            <Osa nimi={props.osa2.nimi} tehtavienLukumaara={props.osa2.tehtavia} />
            <Osa nimi={props.osa3.nimi} tehtavienLukumaara={props.osa3.tehtavia} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavienLukumaara}</p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.yhteensa} tehtävää</p>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
            <Yhteensa yhteensa={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
import Cabecalho from "../../components/header"
import {Link} from "react-router"
import "../../scss/global.scss"
import "./home.scss"

export default function Home(){
    return(
        <main className="Main-Home">
            <Cabecalho />

            <div className="versicleDaily">
                <h1 className="titleCard">Felicidade</h1>
                <h3 className="text">A tua palavra e lâmpada para os meus pés</h3>
                <h2 className="versicle">Salmos 119:105</h2>

                <button className="info">Veja mais</button>
            </div>

            <h1 className="title">Versículo Global</h1>

            <section className="cards">
                <div className="sad">
                    <h1 className="titleCard2">Tristeza</h1>
                    <button className="button">Fique alegre!</button>
                </div>

                <div className="anger">
                    <h1 className="titleCard2">Raiva</h1>
                    <button className="button">Se acalme!</button>
                </div>

                <div className="peace">
                    <h1 className="titleCard2">Paz</h1>
                    <button className="button">N sei</button>
                </div>
            </section>
        </main>
    )
}
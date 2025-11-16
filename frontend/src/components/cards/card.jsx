import { Link } from "react-router";
import "./card.scss"

export default function Cards() {
    return (
        <section className="cards">
            <div className="card1">
                <h1 className="titleCard">Tristeza</h1>
                <h3 className="descriptionCard">É só ser feliz pô!</h3>
                <button className="webPage">
                    <Link className="info">Ir a página!</Link>
                </button>
            </div>

            <div className="card2">
                <h1 className="titleCard">Raiva</h1>
                <h3 className="descriptionCard">Não mate seu colega ao seu lado!</h3>
                <button className="webPage">
                    <Link className="info">Ir a página!</Link>
                </button>
            </div>

            <div className="card3">
                <h1 className="titleCard">Paz</h1>
                <h3 className="descriptionCard">Oque fazer para obter paz?</h3>
                <button className="webPage">
                    <Link className="info">Ir a página!</Link>
                </button>
            </div>
        </section>
    )
}
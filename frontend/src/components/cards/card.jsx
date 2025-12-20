import { Link } from "react-router";
import "./card.scss"

export default function Cards() {
    return (
        <section className="cards">

            <div style={{backgroundColor: '#9c3c3c'}} className="card">
                <h1 style={{color:'white'}} >Raiva</h1>
                <h3 style={{color: 'white'}}>Não mate seu colega ao seu lado!</h3>
                    <Link className="info">
                        <button className="webPage">Ir a página!</button>
                    </Link>
            </div>

            <div style={{backgroundColor: 'rgba(51, 94, 158, 1)'}}  className="card">
                <h1 style={{color:'white'}}>Tristeza</h1>
                <h3 style={{color: 'white'}}>É só ser feliz pô!</h3>
                <Link className="info">
                        <button className="webPage">Ir a página!</button>
                </Link>
            </div>

            <div style={{backgroundColor: 'rgba(237, 254, 255, 1)'}} className="card">
                <h1 style={{color:'rgba(43, 90, 92, 1)'}}>Paz</h1>
                <h3 style={{color: 'black'}}>Oque fazer para obter paz?</h3>
                <Link className="info">
                    <button className="webPage">Ir a página!</button>
                </Link>
            </div>
        </section>
    )
}
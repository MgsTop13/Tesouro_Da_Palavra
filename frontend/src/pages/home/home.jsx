import Footer from "../../components/footer/footer"
import Cabecalho from "../../components/header"
import Cards from "../../components/cards/card"     
import {Link} from "react-router"
import "../../scss/global.scss"
import "./home.scss"

export default function Home(){
    return(
        <main className="Main-Home">
            <Cabecalho   />

            {/*Esse versicleDaily e pra puxar os versiculos favoritos do banco */}
            <div className="versicleDaily">
                <h1 className="titleCard">Felicidade</h1>
                <h3 className="text">A tua palavra e lâmpada para os meus pés</h3>
                <h2 className="versicle">Salmos 119:105</h2>

                <button className="info"><Link className="Link" to={"/VersiclesGlobal"}>Veja mais</Link></button>
            </div>

            <h1 className="title">Versículos - Global</h1>

            <Cards />

            <Footer />
        </main>
    )
}
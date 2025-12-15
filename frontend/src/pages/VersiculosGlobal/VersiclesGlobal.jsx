import Footer from "../../components/footer/footer"
import Cabecalho from "../../components/header"
import {Link} from "react-router"
import "./VersiclesGlobal.scss"
import "../../scss/global.scss"

export default function VersiclesGlobal(){
    return(
        <main className="main-Global">
            <Cabecalho />

            <h1 className="nomeUser">Olá usuario!</h1>

            <section className="CarregarVersiculos">
                <div className="infoText">
                    <h1 className="tituloSite">Versiculos Global</h1>
                    <p className="descricaoSite">Aqui você acha versiculos publicados para todo o público visualizar e favoritar</p>
                </div>

                    <h4 className="tituloSentimento">Insira seu sentimento</h4>
                    <select className="sentimento">
                        <option value="">
                            Selecione um sentimento
                        </option>
                        <option value="Triste">Triste</option>
                        <option value="Feliz">Feliz</option>
                        <option value="Alegre">Alegre</option>
                    </select>

                    <button className="carregarVersiculos">Carregar</button>
            </section>

            <Footer  />
        </main>
    )
}
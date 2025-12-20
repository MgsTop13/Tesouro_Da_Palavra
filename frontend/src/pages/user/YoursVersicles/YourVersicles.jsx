import Cabecalho2 from "../../../components/headerPages"
import Footer from "../../../components/footer/footer"
import {Link} from "react-router"
import "./YourVersicles.scss"

export default function YourVersicles(){
    return(
        <main className="VersiculosUser">
            <Cabecalho2 />

            <h1 className="nomeUser">Olá usuario!</h1>

            <section className="CarregarVersiculos">
                <div className="infoText">
                    <h1 className="tituloSite">Versiculos do Usuario</h1>
                    <p className="descricaoSite">Aqui você acha versiculos que você salvou em sua conta!</p>
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
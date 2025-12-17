import Cabecalho2 from "../../../components/headerPages"
import Footer from "../../../components/footer/footer"
import {Link} from "react-router"
import "./Insert.scss"
export default function Insert(){
    return(
        <main className="insertVersiculoUser">
            <Cabecalho2 />

            <h3 className="nameUser">Olá user!</h3>
            <p className="desc">Aqui você podera adicionar versiculos em sua conta!</p>

            <section className="versiculoInfo">
                <select className="sentimento">
                    <option value="">Selecione um sentimento</option>
                        <option value="Triste">Triste</option>
                        <option value="Feliz">Feliz</option>
                        <option value="Alegre">Alegre</option>
                </select>

                 <div className="input1">
                    <h3 className="descricaoVers">Oque você entendeu do versiculo</h3>
                    <input type="text"placeholder="Amar ao próximo e amar a Cristo!" />
                </div>

                <div className="input2">
                    <h3 className="versiculo">Versiculo de base</h3>
                    <input type="text" placeholder="Romanos 13:9-10"/>
                </div>

                <div className="input3">
                    <h3 className="favorito">E seu versiculo favorito?</h3>
                    <input type="checkbox" />
                </div>        
            </section>

            <Footer />
        </main>
    )
}
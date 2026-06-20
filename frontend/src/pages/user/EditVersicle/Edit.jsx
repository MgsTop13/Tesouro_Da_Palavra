import Footer from "../../../components/footer/footer.jsx"
import Cabecalho2 from "../../../components/headerPages"
import {Link} from "react-router"
import "./Edit.scss"

export default function Edit(){
    return(
        <main className="EditarVersiculosUser">
            <Cabecalho2 />
            
             <h3 className="nameuser">Olá usuario!</h3>
             <p className="desc">Aqui você poderá editar seus versiculos!</p>

             <section className="dadosUser">
                <h2 className="sentimentoPae">Sentimento:</h2>
                
                <select className="Sentimento">
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

                <button className="enviar">Editar</button>
             </section>
             <Footer />
        </main>
    )
}
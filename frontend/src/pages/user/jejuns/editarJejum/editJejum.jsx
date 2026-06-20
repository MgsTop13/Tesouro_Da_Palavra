import Footer from "../../../../components/footer/footer.jsx"
import Cabecalho2 from "../../../../components/headerPages"
import { Link } from "react-router"
import "./editarJejum.scss"

export default function EditJejum() {
    return (
        <main className="EditarJejumUser">
            <Cabecalho2 />
            <div className="info">


                <h3 className="nameuser">Olá usuario!</h3>
                <p className="desc">Aqui você poderá editar seus Jejuns/anotações!</p>

            </div>
            <section className="dadosUser">
                <div className="input0">
                    <h3 className="title">Titulo do seu Jejum</h3>
                    <input type="text" placeholder="Como amar ao próximo?" />
                </div>
                <div className="input1">
                    <h3 className="descricaoJejum">Oque você entendeu sobre o jejum?</h3>
                    <input type="text" placeholder="Amar ao próximo como nós mesmos!" />
                </div>

                <div className="input2">
                    <h3 className="versiculo">Versiculo de base</h3>
                    <input type="text" placeholder="Romanos 13:9-10" />
                </div>

                <div className="input3">
                    <h3 className="versiculo">Versiculo adicional</h3>
                    <input type="text" placeholder="Romanos 13:15-16" />
                </div>
            </section>
            <Footer />

            <button className="btn"></button>
        </main>
    )
}
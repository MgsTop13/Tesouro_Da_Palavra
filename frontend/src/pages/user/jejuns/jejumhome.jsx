import "./jejumhome.scss"
import "../../../scss/global.scss"
import { Link } from "react-router"
import Cabecalho2 from "../../../components/headerPages/"
import Footer from "../../../components/footer/footer.jsx"
export default function JejumHome() {
    return (
        <main className="jejumMain">
            <Cabecalho2 />
            <section className="cardsPages">
                <div className="page1">
                    <h1 className="title">Editar jejuns</h1>
                    <h3 className="description">Aqui você poderá editar suas anotações!</h3>
                    <Link className="link" to={'/EditarJejum'}>
                        <button>Editar</button>
                    </Link>
                </div>
                <div className="page2">
                    <h1 className="title">Inserir Jejuns</h1>
                    <h3 className="description">Adicionar anotações importantes sobre o seu jejum</h3>
                    <Link className="link" to={"/InserirJejum"}>
                        <button>Inserir</button>
                    </Link>
                </div>
                <div className="page3">
                    <h1 className="title">Remover Jejuns</h1>
                    <h3 className="description">Remover anotações erradas</h3>
                    <Link className="link" to={"/RemoverJejum"}>
                        <button>Remover</button>
                    </Link>
                </div>
            </section>

            <section className="jejunsSalvos">
                <h1 className="title">Seus jejuns/anotações salvas</h1>
            </section>
            <Footer />
        </main>
    )
}
import Footer from "../../../../components/footer/footer.jsx"
import Cabecalho2 from "../../../../components/headerPages"
import { Link } from "react-router"
import "./removerJejum.scss"

export default function RemoverJejum() {
    return (
        <main className="removerJejum">
            <Cabecalho2 />

            <h3 className="userName">Olá user!</h3>
            <p className="desc">Delete algum versiculo de sua conta caso errou algo!</p>

            <div className="input">
                <h1>Coloque o numero de identificador do versiculo</h1>
                <input type="number" placeholder="7" />
            </div>

            <Footer />
        </main>
    )
}
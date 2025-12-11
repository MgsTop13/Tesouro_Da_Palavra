import Footer from "../../components/footer/footer"
import Cabecalho from "../../components/header"
import {Link} from "react-router"
import "./VersiclesGlobal.scss"

export default function VersiclesGlobal(){
    return(
        <main className="main-Global">
            <Cabecalho />

            <h1>Test</h1>

            <Footer />
        </main>
    )
}
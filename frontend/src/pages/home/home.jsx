import Cabecalho from "../../components/header"
import {Link} from "react-router"
import "./home.scss"

export default function Home(){
    return(
        <main>
            <Cabecalho />

            <section>
                <h1>TitleHome</h1>
            </section>
        </main>
    )
}
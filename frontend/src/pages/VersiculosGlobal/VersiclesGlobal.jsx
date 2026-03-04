import "../../scss/global.scss"
import "./VersiclesGlobal.scss"
import {Link} from "react-router"
import Footer from "../../components/footer/footer"
import Cabecalho2 from "../../components/headerPages"
import api from "../../axios"
import { useEffect, useState } from "react"


export default function VersiclesGlobal(){
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [name, setName] = useState("usuário")
    async function tokenInfo(){
        try {
            const response = await api.post("/VerifyToken", {token})
            console.log(response)
            setName(response.data.decoded.name)
        } catch (error) {
            console.error(error.response)
        }
    }
    useEffect(() => {
        tokenInfo()
    }, [token])
    return(
        <main className="main-Global">
            <Cabecalho2 />

            <h1 className="nomeUser">Olá {name}!</h1>

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
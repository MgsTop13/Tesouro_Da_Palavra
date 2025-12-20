import "./favoritos.scss"
import "../../../scss/global.scss"
import Footer from "../../../components/footer/footer"
import Cabecalho2 from "../../../components/headerPages"

export default function PaginaDeVersiculosFavoritos(){
    async function desfavoritar(){
        //Codigo de fazer update de favoritos
    }
    return(
        <main className="favoritos">
            <Cabecalho2 />
            <h1 className="title1">Versiculos favoritados globalmente</h1>

            {/*versiculosGlobal.map(versiculoGlobal => (
                <div key={versiculoGlobal.id} className="versiculosGlobal">
                    <h1 className="titleGlobal">(versiculoGlobal.title)</h1>
                    <h3 className="descGlobal">(versiculo.desc)</h3>
                    <h3 className="versiculoName">(versiculo.versiculo</h3>
                    <img src="" onClick={()=> desfavoritar()} alt="favorito icone"/>
                </div>
            ))*/}

            <h1 className="title2">Versiculos favoritados em sua conta</h1>
            <Footer />
        </main>
    )
}
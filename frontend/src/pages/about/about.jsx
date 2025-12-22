import Cabecalho2 from "../../components/headerPages"
import Footer from "../../components/footer/footer"
import "../../scss/global.scss"
import "./about.scss"

export default function About(){
    return(
        <main className="aboutPage">
            <Cabecalho2 />

            <h1 className="title">Sobre o Website</h1>
        
            <section className="icones">
                <h1>Como fizemos os icones?</h1>
                <h3 className="desc">Uma explicação top sobre como eu e minha colega fizemos os icones(roubei de uns sites, depois ela ajustou)</h3>

                <div className="imgs">
                    <h2 className="titleImg">Imagens</h2>
                    <div className="img1">
                        <img src="" />
                        <h2>Referencia/Autor</h2>
                        <a href=""></a>
                    </div>
                </div>
            </section>
            <section className="desenvolvedores">
                <div className="ADM">
                    <img src="" /> {/*Fotinha do github */}
                    <div className="info">
                        <h2>Nome:</h2>
                        <h3>MgsTop13</h3>
                    </div>
                    <div className="info">
                        <h2>Cargo:</h2>
                        <h3>Logica do site</h3>
                    </div>
                    <div className="info2">
                        <h1>Contatos</h1>
                        <div className="info">
                            <h2>Github</h2>
                            <a href=""></a>
                        </div>

                        <div className="info">
                            <h2>Linkedin</h2>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
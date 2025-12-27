import Cabecalho2 from "../../components/headerPages"
import Footer from "../../components/footer/footer"
import "../../scss/global.scss"
import "./about.scss"

export default function About(){
    return(
        <main className="aboutPage">
            <Cabecalho2 />

            <h1 className="title">Sobre o Website</h1>
        
            <section className="icones2">
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
                    <img src="https://avatars.githubusercontent.com/u/204924784?v=4" /> {/*Fotinha do github */}
                    <div className="info">
                        <h2>Nome:</h2>
                        <h3>Marcos G.</h3>
                    </div>
                    <div className="info">
                        <h2>Cargo:</h2>
                        <h3>BackEnd, FrontEnd</h3>
                    </div>
                    <div className="info2">
                        <h1>Contatos</h1>
                        <div className="info">
                            <h2>Github</h2>
                            <a href="https://github.com/MgsTop13" rel="noopener noreferrer" target="_blank">Veja meus projetos</a>
                        </div>

                        <div className="info">
                            <h2>Linkedin</h2>
                            <a href="https://www.linkedin.com/in/marcos-santos-62722238b/" rel="noopener noreferrer" target="_blank">Entre em contato!</a>
                        </div>
                    </div>
                </div>

                <div className="ADM">
                    <img src="https://avatars.githubusercontent.com/u/206538312?v=4" id="img2" /> {/*Fotinha do github */}
                    <div className="info">
                        <h2>Nome:</h2>
                        <h3>Amanda S.</h3>
                    </div>
                    <div className="info">
                        <h2>Cargo:</h2>
                        <h3>WebDesigner, FrontEnd</h3>
                    </div>
                    <div className="info2">
                        <h1>Contatos</h1>
                        <div className="info">
                            <h2>Github</h2>
                            <a href="https://github.com/Mandeds" target="_blank" rel="noopener noreferrer">Veja meus projetos</a>
                        </div>

                        <div className="info">
                            <h2>Linkedin</h2>
                            <a href="https://www.linkedin.com/in/amandinha-souza-programadora/" rel="noopener noreferrer">Entre em contato!</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
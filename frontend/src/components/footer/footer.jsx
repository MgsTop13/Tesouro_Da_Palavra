import { Link, useLocation } from "react-router"
import Insert from "/icons/Insert.png"
import Delete from "/icons/Delete.png"

import List from "/icons/List.png"
import "./footer.scss"


export default function Footer() {
    const localizacaoDaPagina = useLocation(); //Isso vai pegar a url
    const CaminhoDaUrl = location.pathname; //Isso vai dizer em que pagina você está 
    return (
        <footer>
            <div className="icones">
                <nav className={`icon2 ${CaminhoDaUrl === '/Insert' ? 'Active': ''}`}>
                    <Link className="link" to={'/Insert'}>
                        <img src={Insert} />
                        <h3>Inserir</h3>
                    </Link>
                </nav>

                <nav className={`icon ${CaminhoDaUrl === '/' ? 'Active': ''}`}>
                    <Link className="link" to={'/'}>
                        <img src='' alt="cruzIcon" />
                        <h3>Inicio</h3>
                    </Link>
                </nav>

                <nav className={`icon3 ${CaminhoDaUrl === '/YourVersicles' ? 'Active': ''}`}>
                    <Link className="link" to={'/YourVersicles'}>
                        <img src={List} />
                        <h3>Listar</h3>
                    </Link>
                </nav>

                <nav className={`icon4 ${CaminhoDaUrl === '/Remove' ? 'Active': ''}`}>
                    <Link className="link" to={'/Remove'}>
                        <img src={Delete} />
                        <h3>Remover</h3>
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
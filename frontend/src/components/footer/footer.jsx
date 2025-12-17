import { Navigate, useNavigate, Link } from "react-router"
import Insert from "/icons/Insert.png"
import Delete from "/icons/Delete.png"
import Edit from "/icons/Edit.png"
import Icon from "/icons/Icon.png"
import List from "/icons/List.png"
import "./footer.scss"
export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="icones">

                <nav className="icon1">
                    <Link className="link" to={'/Edit'}>
                        <img src={Edit} />
                        <h3>Editar</h3>
                    </Link>
                </nav>

                <nav className="icon2">
                    <Link className="link" to={'/Insert'}>
                        <img src={Insert} />
                        <h3>Inserir</h3>
                    </Link>
                </nav>

                <nav className="icon">
                    <img src={Icon} />
                </nav>

                <nav className="icon4">
                    <Link className="link" to={'/YourVersicles'}>
                        <img src={List} />
                        <h3>Listar</h3>
                    </Link>
                </nav>

                <nav className="icon5">
                    <Link className="link" to={'/Remove'}>
                        <img src={Delete} />
                        <h3>Remover</h3>
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
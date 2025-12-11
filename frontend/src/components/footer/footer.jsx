import Insert from "/icons/Insert.png"
import Delete from "/icons/Delete.png"
import Edit from "/icons/Edit.png"
import Icon from "/icons/Icon.png"
import List from "/icons/List.png"
import "./footer.scss"

export default function Footer(){
    return(
        <footer>
            <div className="icones">

            <nav className="icon1">
                <img src={Edit} />
                <h3>Editar</h3>
            </nav>

            <nav className="icon2">
                <img src={Insert} />
                <h3>Inserir</h3>
            </nav>

            <nav className="icon">
                <img src={Icon} />
            </nav>

            <nav className="icon4">
                <img src={List} />
                <h3>Listar</h3>
            </nav>

            <nav className="icon5">
                <img src={Delete} />
                <h3>Remover</h3>
            </nav>
            </div>
        </footer>
    )
}
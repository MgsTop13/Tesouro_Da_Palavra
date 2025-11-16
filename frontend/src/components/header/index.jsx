import Account from "/imgs/user.png"
import Lupa from "/imgs/Lupa.png"
import Menu from "/imgs/menu.png"
import { Link } from "react-router"
import './index.scss'
import { useState, useEffect } from "react"

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [ehmobile, setEhMobile] = useState(window.innerWidth < 769);

    //Função para ativar/desativar menu
    function AtivarMenu() {
        setMenuAberto(!menuAberto)
    }

    //Verificar se é mobile ou não
    useEffect(() => {
        function verificarTamanho() {
            const mobile = window.innerWidth < 769;
            setEhMobile(mobile);
            if (!mobile) setMenuAberto(false); //Ele deixa de existir no desktop(pc)
        };


        window.addEventListener('resize', verificarTamanho);
        return () => window.removeEventListener('resize', verificarTamanho);
    }, []);

    return (
        <header className="Header-Home">
            {ehmobile && (
                <nav>
                    <img className="user" src={Account} />
                    <img className="lupa" src={Lupa} />
                    <img onClick={AtivarMenu} src={menuAberto ? Lupa : Menu} />
                </nav>
            )}


            {menuAberto && (
                <div className="opcoesMenu">
                    <h3>Menu hamburguer ativo!</h3>
                </div>
            )}

            {!ehmobile && (
                <nav>
                    <img className="user" src={Account} />
                    <img className="lupa" src={Lupa} />
                </nav>
            )}
        </header>
    )
}
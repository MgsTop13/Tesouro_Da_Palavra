import Account from "/imgs/user.png"
import Lupa from "/imgs/Lupa.png"
import Menu from "/imgs/menu.png"
import { Link } from "react-router"
import './index.scss'
import { useState, useEffect, useEffectEvent } from "react"

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [ehmobile, setEhMobile] = useState(window.innerWidth < 769);

    //Função para ativar/desativar menu
    function AtivarMenu() {
        setMenuAberto(!menuAberto)
    }

    //Verificar se é mobile ou não
    const VerificarTamanho = useEffectEvent(() => {
        const mobile = window.innerWidth < 769;
            setEhMobile(mobile);
            if (!mobile) {
                setMenuAberto(false)
            }; //Ele deixa de existir no desktop(pc)
    })

    useEffect(() => {
        window.addEventListener('resize', VerificarTamanho);
        return () => window.removeEventListener('resize', VerificarTamanho);
    }, []);

    return (
        <header className="Header-Home">
            {ehmobile && (
                <nav className="nav-Header">
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
                <nav className="nav-Header">
                    <img className="user" src={Account} />
                    <img className="lupa" src={Lupa} />
                </nav>
            )}
        </header>
    )
}
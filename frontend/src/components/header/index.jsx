import './index.scss'
import Menu from "/icons/Menu.png"
import { Link } from "react-router"
import Account from "/icons/iconUser.png"
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
                    <div className="itens">

                        <div className="item1">
                            <Link className='link' to={'/Jejuns'}>Seus jejuns</Link> {/*Pagina de jejuns*/}
                        </div>

                        <div className="item2">
                            <Link className='link' to={'/Login'}>Login</Link> {/*Isso deve ser do login*/}
                            <Link className='link' to={'/About'}>Sobre o site</Link> {/*Pagina de sobre*/}
                        </div>

                        <div className="item3">
                            <Link className='link' to={'/Account'}>Configurações da conta</Link> {/*Pagina de configurações da conta */}
                            <Link className='link' to={'/Favoritos'}>Favoritos</Link> {/*Pagina de versiculos favoritos*/}
                        </div>
                    </div>
                </nav>
            )}
        </header>
    )
}
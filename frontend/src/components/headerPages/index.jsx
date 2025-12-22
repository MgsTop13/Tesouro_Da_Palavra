import './index.scss'
import { Link } from "react-router"
import Account from "/icons/iconUser.png"
import { useState, useEffect, useEffectEvent } from "react"

export default function Cabecalho2() {
    return (
        <header className="Header-Pages">

            <nav className="nav-Header">
                <img className="user" src={Account} />
                <div className="itens">

                    <div className="item1">
                        <Link to={'/'} className='link'>Voltar</Link>
                    </div>
                </div>
            </nav>

        </header>
    )
}
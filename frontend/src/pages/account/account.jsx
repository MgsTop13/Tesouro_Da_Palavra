import Cabecalho2 from "../../components/headerPages"
import Footer from "../../components/footer/footer"
import { useState } from "react"
import "../../scss/global.scss"
import "./account.scss"
export default function Account(){
    const [name, setName] = useState('Mgs');
    const [edit, setEdit] = useState(false);
    return(
        <main className="accountPage">
            <Cabecalho2 />
            <seciton className="dadosUsuario">
                <h1 className="userName">Nome:</h1>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly={!edit} 
                    />
                    <button onClick={() => setEdit(!edit)}>
                        {edit ? 'salvar': 'editar'}
                    </button>
            </seciton>
            <Footer />
        </main>
    )
}